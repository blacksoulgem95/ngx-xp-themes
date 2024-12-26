const {iconPacks, extract} = require("./extract-icon-names")
const fs = require('fs')
const path = require('path')
const {exec} = require("child_process")
const printProgress = require('./progress')
const {optimize} = require('svgo')
const {from, map, bufferCount, forkJoin, concatMap} = require('rxjs')

const {DOMParser, XMLSerializer} = require('xmldom')

const assets = './projects/ngx-xp-icons/assets'
const items = []

function cleanSvg(svgContent) {
  const doc = new DOMParser().parseFromString(svgContent, 'image/svg+xml');

  // Rimuovi namespace specifici
  const namespacesToRemove = ['sodipodi', 'inkscape'];
  namespacesToRemove.forEach((ns) => {
    const elements = doc.getElementsByTagNameNS('*', '*');
    for (let i = 0; i < elements.length; i++) {
      const attrsToRemove = [];
      for (let j = 0; j < elements[i].attributes.length; j++) {
        const attr = elements[i].attributes[j];
        if (attr.name.startsWith(`${ns}:`) || attr.name === `xmlns:${ns}`) {
          attrsToRemove.push(attr.name);
        }
      }
      attrsToRemove.forEach((attr) => elements[i].removeAttribute(attr));
    }
  });

  // Rimuovi attributi globali non necessari
  const attributesToRemove = ['id', 'data-name', 'class'];
  const allElements = doc.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i++) {
    attributesToRemove.forEach((attr) => {
      if (allElements[i].hasAttribute(attr)) {
        allElements[i].removeAttribute(attr);
      }
    });
  }

  return new XMLSerializer().serializeToString(doc);
}


for (let pack of Object.keys(iconPacks)) {
  const folder = path.join(assets, pack)
  const names = extract(pack)
  items.push(...names.map(name => {
    return {
      png: path.join(folder, name + '.png'),
      svg: path.join(folder, name + '.svg')
    }
  }))

}

console.log("Found", items.length, "items to convert")
console.log("Doing", items.length * 2, "steps")


let i = 1

from(items).pipe(
  // convert name to non-executed observable to perform call
  map(item => {
    return new Promise((resolve, reject) => {
      printProgress(i++, items.length * 2)

      if (fs.existsSync(item.svg)) {
        // skipping already generated svgs
        printProgress(i++, items.length * 2)
        resolve(item.svg)
        return
      }

      exec(`inkscape -p "${item.png}" -o "${item.svg}"`, (error, stdout, stderr) => {
        process.stderr.write(stderr)
        process.stdout.write(stdout)


        if (error) {
          console.error(error)
          printProgress(i++, items.length * 2)
          reject(error)
          process.exit(1)
        } else {

          const data = fs.readFileSync(item.svg, {encoding: 'utf-8'})

          // Ottimizza il contenuto SVG
          const result = optimize(cleanSvg(data), {
            multipass: true, // Esegui più passaggi di ottimizzazione
            plugins: [
              'removeDoctype',
              'removeComments',
              'cleanupIds',
              'cleanupAttrs',
              'removeMetadata',
              'convertPathData',
              'mergePaths',
              'cleanupListOfValues',
              'removeUselessStrokeAndFill',
              'cleanupNumericValues',
              'convertColors',
              'removeOffCanvasPaths',
              'removeUnusedNS',
              'removeUselessDefs',
              'reusePaths',
              'removeXMLNS',
              { name: 'removeViewBox', active: false }, // Mantieni il viewBox
            ],
          });

          fs.writeFileSync(item.svg, result.data, {encoding: 'utf-8'})

          printProgress(i++, items.length * 2)
          resolve(stdout)
        }
      })
    })
  }),

  // split in chunks of 2
  bufferCount(2),

  // execute concurrently
  concatMap(res => forkJoin(res))
).subscribe({
  next: console.log,
  error: console.error
})

