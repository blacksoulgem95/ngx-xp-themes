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
    const files = fs.readdirSync(folderPath);

    // Filter out directories and remove file extensions
    return files
      .filter(file => fs.statSync(path.join(folderPath, file)).isFile())
      .map(file => path.parse(file).name);
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
}

const types = [
  'xp', '2k'
]

const extract = (type) => {

  if (!type || types.indexOf(type) < 0) {
    console.error("Not a valid type. valid types:", types)
    throw new Error("Not a valid type.")
  }

  const assets = './projects/ngx-xp-icons/assets'
  const folderPath = assets + (`/${type}`); // Replace with your folder path
  return listFilesWithoutExtension(folderPath);
}

module.exports = extract
