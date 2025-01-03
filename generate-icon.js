const {
  extract,
  iconPacks
} = require('./extract-icon-names')
const upperCamelCase = require("uppercamelcase");
const {writeFileSync} = require("fs")
const progress = require("./progress")

const libraryFile = "./projects/ngx-xp-icons/src/lib/asset.library.ts"
const assetBaseUrl = '/assets/'

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
const megaType = new TypeGenerator('IconNames')

let typeAssociation = `{
`

let total = 0;
let current = 0;

for (let type in iconPacks) {

  const iconPack = iconPacks[type]

  iconPackGenerator.add(type)
  types[type] = new TypeGenerator('IconPack' + iconPack.upperType)

  typeAssociation += `
  "${type}": {files: ${iconPack.upperType}, validator: isTypeIconPack${iconPack.upperType}},`

  const names = extract(iconPack.type)
  const baseUrl = assetBaseUrl + iconPack.type + '/'

  total += names.length;

  const object = names.map(name => {

    types[type].add(name)
    megaType.add(name)

    progress(current++, total)
    return {
      name: name,
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
libraryContent += `${megaType.build()}\n\n`

Object.keys(types).map(key => types[key].build()).forEach(type => {
  libraryContent += `${type}\n\n`
})

libraryContent += `export const iconPacks = ${typeAssociation}\n\n`


writeFileSync(libraryFile, libraryContent, {encoding: 'utf-8', flag: 'w'})
