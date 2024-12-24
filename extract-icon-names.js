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
    const fileNamesWithoutExtension = files
      .filter(file => fs.statSync(path.join(folderPath, file)).isFile())
      .map(file => path.parse(file).name);

    return fileNamesWithoutExtension;
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
}

// Example usage
const assets = './projects/ngx-xp-icons/src/assets'
const folderPath = assets + (!!process.env['2K'] ? '/2k' : '/xp'); // Replace with your folder path
const result = listFilesWithoutExtension(folderPath);

result.forEach(f => {
  process.stdout.write(`${f}\n`)
})
