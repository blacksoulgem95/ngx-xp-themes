const {iconPacks, extract} = require("./extract-icon-names")
const fs = require('fs')
const path = require('path')
const {exec} = require("child_process")
const printProgress = require('./progress')
const {from, map, bufferCount, forkJoin, concatMap} = require('rxjs')

const assets = './projects/ngx-xp-icons/assets'
const items = []

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
      }

      exec(`inkscape -p "${item.png}" -o "${item.svg}"`, (error, stdout, stderr) => {
        process.stderr.write(stderr)
        process.stdout.write(stdout)

        printProgress(i++, items.length * 2)

        if (error) {
          console.error(error)
          reject(error)
          process.exit(1)
        }
        resolve(stdout)
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

