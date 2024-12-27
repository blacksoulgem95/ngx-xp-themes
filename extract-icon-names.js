const fs = require('fs');
const path = require('path');

/**
 * Get the list of files in a directory without their extensions
 * @param {string} folderPath - Path to the folder
 * @returns {string[]} - List of file names without extensions
 */
function listFilesWithoutExtension(folderPath) {
  try {
    // Read the directory contents
    let files = fs.readdirSync(folderPath)

    // Filter out directories and remove file extensions
    files = files
      .filter(file => fs.statSync(path.join(folderPath, file)).isFile())
      .map(file => path.parse(file).name);

    return files.filter(function (elem, pos) {
      return files.indexOf(elem) === pos;
    });
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
}

const iconPacks = {
  'xp': {type: 'xp', upperType: 'Xp'},
  'xpsp2': {type: 'xpsp2', upperType: 'XpSP2'},
  'longhorn': {type: 'longhorn', upperType: 'Longhorn'},
  'whistler': {type: 'whistler', upperType: 'Whistler'},
  'applications': {type: 'applications', upperType: 'Applications'},
  'office2003': {type: 'office2003', upperType: 'Office2003'},
  'office2007': {type: 'office2007', upperType: 'Office2007'},
}

const extract = (type) => {

  if (!type || Object.keys(iconPacks).indexOf(type) < 0) {
    console.error(type, "is not a valid type. valid types:", Object.keys(iconPacks))
    throw new Error("Not a valid type.")
  }

  const assets = './projects/ngx-xp-icons/assets'
  const folderPath = assets + (`/${type}`); // Replace with your folder path
  return listFilesWithoutExtension(folderPath);
}

module.exports = {
  iconPacks, extract
}
