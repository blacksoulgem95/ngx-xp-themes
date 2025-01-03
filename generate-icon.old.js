const hbs = require('handlebars')
const {readFileSync, existsSync, mkdirSync, writeFileSync} = require("fs");
const extractor = require('./extract-icon-names')
const path = require("path");
const upperCamelCase = require('uppercamelcase');
const ImageTracer = require('imagetracerjs')
const PNGReader = require('png.js')
const cheerio = require('cheerio')
const {from, last, of, map, forkJoin, mergeAll, mergeMap, bufferCount, concatMap} = require("rxjs");
const printProgress = require('./progress')
const names = extractor.extract
const iconPacks = extractor.iconPacks

const xpIconComponentTS_Template = `
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-{{type}}-{{icon}}',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './{{type}}-icon-{{icon}}.component.html',
  styleUrl: './{{type}}-icon-{{icon}}.component.css'
})
export class {{upperType}}Icon{{name}}Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
`
const xpIconComponentHtml_Template = `
<img style="display: inline-block" [class]="classStyle" [style.width]="width" [style.height]="height" src="{{imageBase64}}" alt="{{type}}-{{icon}}" />
`


const xpIconComponentCss_Template = ``

const xpIconComponentTS = hbs.compile(xpIconComponentTS_Template)
const xpIconComponentHTML = hbs.compile(xpIconComponentHtml_Template)
const xpIconComponentCSS = hbs.compile(xpIconComponentCss_Template)
const componentAddLine = hbs.compile(`export * from './lib/{{basePath}}/{{name}}.component'`)
const assetsPath = './projects/ngx-xp-icons/assets'
const components = './projects/ngx-xp-icons/src/lib'
const publicApiFile = './projects/ngx-xp-icons/src/public-api.ts'

const componentsToAdd = []

function processIconSet(iconSetType) {
  console.log('\n\n')
  console.log('processing icons for', iconSetType.upperType)

  const iconSet = names(iconSetType.type)

  const writeComponents = ({type, ts, html, css, icon}, idx) => {

    const componentBaseName = `${type}-icon-${icon}`
    const componentPath = path.join(components, componentBaseName)
    if (!existsSync(componentPath))
      mkdirSync(componentPath, {recursive: true})

    writeFileSync(path.join(componentPath, `${componentBaseName}.component.ts`), ts, {encoding: 'utf8', flag: 'w'})
    writeFileSync(path.join(componentPath, `${componentBaseName}.component.html`), html, {encoding: 'utf8', flag: 'w'})
    writeFileSync(path.join(componentPath, `${componentBaseName}.component.css`), css, {encoding: 'utf8', flag: 'w'})
    componentsToAdd.push(componentAddLine({basePath: componentBaseName, name: componentBaseName}))

    console.clear()

    let i = idx +1

    console.log("Completed", componentBaseName, `(${i}/${iconSet.length})\n`)
    printProgress(i, iconSet.length)
    return componentBaseName
  }

  let idx = 0;


    return from(iconSet).pipe(map(name => {
      const file = path.join(assetsPath, iconSetType.type, `${name}.svg`)

      return {
        name,
        svg: readFileSync(file)
      }
    }), map(({name, svg}) => {
        let $ = cheerio.load(svg)
        let svgS = $('svg')
        svgS.attr('[ngClass]', 'classStyle')
        svgS.attr('[style.width]', 'width')
        svgS.attr('width', null)
        svgS.attr('[style.height]', 'height')
        svgS.attr('height', null)

        let html = $.html(svgS)
        return {
          name, html
        }
      }), map(({name, html}) => {
        let upperCamelCaseIconName = upperCamelCase(name)
        let dashedIconName = upperCamelCaseIconName.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
        if (dashedIconName.startsWith('-')) {
          dashedIconName = dashedIconName.slice(1, dashedIconName.length)
        }

        const ts = xpIconComponentTS({
          icon: dashedIconName,
          type: iconSetType.type,
          upperType: iconSetType.upperType,
          name: upperCamelCaseIconName
        })

        // const html = xpIconComponentHTML({icon: dashedIconName, type: iconSetType.type, imageBase64})
        const css = xpIconComponentCSS({icon: dashedIconName})

        return {
          icon: dashedIconName, html, css, ts
        }
      }), map(({icon, html, css, ts}) => {
      return writeComponents({
        type: iconSetType.type,
        ts, html, css, icon
      }, idx++)
    }),

      // split in chunks of 5
      bufferCount(5),

      // execute concurrently
      concatMap(res => forkJoin(res))
      )

}

async function elaboratePacks() {
  for (let key of Object.keys(iconPacks))
    await new Promise((resolve, reject) => {
      processIconSet(iconPacks[key]).pipe(last()).subscribe({
        next: resolve,
        error: reject
      })
    })
}

elaboratePacks().then(() => {
  console.log('\nWriting public-api.ts')
  writeFileSync(publicApiFile, componentsToAdd.join('\n'), {encoding: "utf-8", flag: 'w'})
  console.log("Completed!")
})
