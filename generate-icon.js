const hbs = require('handlebars')
const {readFileSync, existsSync, mkdirSync, writeFileSync} = require("fs");
const names = require('./extract-icon-names')
const path = require("path");
const upperCamelCase = require('uppercamelcase');

const xpIconComponentTS_Template = `
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-{{type}}-{{icon}}',
  standalone: true,
  imports: [
    NgOptimizedImage
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
<img [class]="classStyle" [style.width]="width" [style.height]="height" src="{{imageBase64}}" alt="{{type}}-{{icon}}" />
`

function getProgressBar(completed, total) {
  const percent = ((completed / total) * 100).toFixed(2);
  const barLength = 20; // Lunghezza della barra di progresso
  const completedLength = Math.round((completed / total) * barLength);
  const bar = '█'.repeat(completedLength) + '-'.repeat(barLength - completedLength);
  return `[${bar}] ${percent}%`
}

function printProgress(completed, total) {
  process.stdout.write(`\r${getProgressBar(completed, total)}`);
}

const xpIconComponentCss_Template = ``

const xpIconComponentTS = hbs.compile(xpIconComponentTS_Template)
const xpIconComponentHTML = hbs.compile(xpIconComponentHtml_Template)
const xpIconComponentCSS = hbs.compile(xpIconComponentCss_Template)
const componentAddLine = hbs.compile(`export * from './lib/{{basePath}}/{{name}}.component'`)
const assetsPath = './projects/ngx-xp-icons/assets'
const components = './projects/ngx-xp-icons/src/lib'
const publicApiFile = './projects/ngx-xp-icons/src/public-api.ts'

const componentsToAdd = []
const xp = names('xp')
const twok = []
// const twok = names('2k')

const writeComponents = ({type, ts, html, css, icon}, idx) => {
  const componentBaseName = `${type}-icon-${icon}`
  const componentPath = path.join(components, componentBaseName)
  if (!existsSync(componentPath))
    mkdirSync(componentPath, {recursive: true})

  writeFileSync(path.join(componentPath, `${componentBaseName}.component.ts`), ts, {encoding: 'utf8', flag: 'w'})
  writeFileSync(path.join(componentPath, `${componentBaseName}.component.html`), html, {encoding: 'utf8', flag: 'w'})
  writeFileSync(path.join(componentPath, `${componentBaseName}.component.css`), css, {encoding: 'utf8', flag: 'w'})
  componentsToAdd.push(componentAddLine({basePath: componentBaseName, name: componentBaseName}))

  printProgress(idx + 1, (type === 'xp' ? xp : twok).length)
}

console.log('processing XP icons')
xp.map((name) => {
  const file = path.join(assetsPath, 'xp', `${name}.png`)
  const imageBase64 = 'data:image/png;base64,' + readFileSync(file, 'base64');
  const ts = xpIconComponentTS({icon: name, type: 'xp', upperType: 'Xp', name: upperCamelCase(name)})
  const html = xpIconComponentHTML({icon: name, type: 'xp', imageBase64})
  const css = xpIconComponentCSS({icon: name})
  return {
    ts, html, css, icon: name, type: 'xp'
  }
}).forEach(writeComponents)

// console.log('\nprocessing 2K icons')
// names('2k').map(name => {
//   const file = path.join(assetsPath, '2k', `${name}.png`)
//   const imageBase64 = 'data:image/png;base64,' + readFileSync(file, 'base64url');
//   const ts = xpIconComponentTS({icon: name, type: '2k', upperType: 'TwoK', name: upperCamelCase(name)})
//   const html = xpIconComponentHTML({icon: name, type: '2k', imageBase64})
//   const css = xpIconComponentCSS({icon: name})
//   return {
//     ts, html, css, icon: name, type: 'twok'
//   }
// }).forEach(writeComponents)

console.log('\nWriting public-api.ts')
writeFileSync(publicApiFile, componentsToAdd.join('\n'), {encoding: "utf-8", flag: 'w'})
console.log("Completed!")
