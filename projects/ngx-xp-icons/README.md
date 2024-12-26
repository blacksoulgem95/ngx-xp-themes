# NgxXpIcons

Set of Icons from Windows XP and related OSes.

XP, XPSP2, Longhorn and Whistler icons by [March Mountain](https://www.deviantart.com/marchmountain/art/Windows-XP-High-Resolution-Icon-Pack-916042853)

## Adding icons:
1. if is a new iconpack, add it to the `extract-icon-names.js` file in order to be processed, and add it as required to the service and component
2. add the icon png file to the assets/{icon pack type} folder
3. from the main project run
```
npm run generate-icons
```
and test locally that they work.

The icons will be generated alongside as an svg and the `lib/asset.library.ts` file will be updated.


## Name rules for Icons:
No parenthesis, preferably in the format `icon-name.png` or `icon name.png`


## Usage

1. add it from NPM 
```bash
npm i ngx-xp-icons --save
```
2. Add the library assets folder to your main assets folder, the app will look through http for `/assets/{packageName}/{iconName}.svg`
