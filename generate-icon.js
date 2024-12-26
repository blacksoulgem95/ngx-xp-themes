const {
  extract,
  iconPacks
} = require('./extract-icon-names')
const upperCamelCase = require("uppercamelcase");
const {writeFileSync} = require("fs")

const libraryFile = "./projects/ngx-xp-icons/src/lib/asset.library.ts"
const assetBaseUrl = '../../assets/'

class TypeGenerator {
  constructor(name) {
    this.name = name;
    this.items = []
  }

  add(type) {
    if (this.items.indexOf(type) < 0) {
      this.items.push(type)
    }
    return this
  }
  build() {

    const values = this.items.map(i => `'${i}'`)

    let output = `export type ${this.name} = ${values.join(' | ')}`

    output += `\n\nexport const isType${this.name} = (value: string) => [${values.join(', ')}].indexOf(value) >= 0`

    return output
  }
}



let libraryContent = `
/**
  * Generated content
  */
`

const iconPackGenerator = new TypeGenerator('IconPack')
const types = {}

let typeAssociation = `{
`

for (let type in iconPacks) {

  const iconPack = iconPacks[type]

  iconPackGenerator.add(type)
  types[type] = new TypeGenerator('IconPack' + iconPack.upperType)

  typeAssociation += `
  "${type}": {files: ${iconPack.upperType}, validator: isTypeIconPack${iconPack.upperType}},`

  const names = extract(iconPack.type)
  const baseUrl = assetBaseUrl + iconPack.type + '/'

  const object = names.map(name => {
    let upperCamelCaseIconName = upperCamelCase(name)
    let dashedIconName = upperCamelCaseIconName.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
    if (dashedIconName.startsWith('-')) {
      dashedIconName = dashedIconName.slice(1, dashedIconName.length)
    }

    types[type].add(dashedIconName)
    return {
      name: dashedIconName,
      path: baseUrl + name + '.png'
    }
  }).reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.path
    return accumulator
  }, {})

  libraryContent += `export const ${iconPack.upperType} = ${JSON.stringify(object, null, 2)}\n\n`
}

typeAssociation += '\n}'

libraryContent += `${iconPackGenerator.build()}\n\n`

Object.keys(types).map(key => types[key].build()).forEach(type => {
  libraryContent += `${type}\n\n`
})

libraryContent += `export const iconPacks = ${typeAssociation}\n\n`


writeFileSync(libraryFile, libraryContent, {encoding: 'utf-8', flag: 'w'})
