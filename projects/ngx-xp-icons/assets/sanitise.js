const fs = require('fs');
const path = require('path');
const readline = require('readline');
const camel = require('uppercamelcase')

// Funzione per convertire da camel case a separato con -
function sanitise(str) {
  return camel(str)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Aggiunge un "-" prima delle lettere maiuscole
    .toLowerCase(); // Converte tutto in minuscolo
}

// Funzione per stampare la barra di progresso
function progressBar(current, total) {
  const width = 50; // Larghezza della barra
  const progress = Math.floor((current / total) * width);
  const percent = Math.floor((current / total) * 100);
  const bar = '█'.repeat(progress) + ' '.repeat(width - progress);

  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`Progress: |${bar}| ${percent}%`);
}

// Funzione principale per rinominare i file
async function renameFiles(dir) {
  const files = [];
  const readDirRecursive = (directory) => {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.join(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        readDirRecursive(fullPath);
      } else {
        files.push(fullPath);
      }
    });
  };

  readDirRecursive(dir);

  const totalFiles = files.length;
  let currentFile = 0;

  for (const file of files) {
    currentFile++;

    const dirName = path.dirname(file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    // Converti il nome del file
    const newBaseName = sanitise(baseName);
    const newFileName = `${newBaseName}${ext}`;
    const newPath = path.join(dirName, newFileName);

    // Rinomina il file solo se necessario
    if (path.basename(file) !== newFileName) {
      console.log(`\nRenaming: ${file} -> ${newPath}`);
      fs.renameSync(file, newPath);
    }

    // Aggiorna la barra di progresso
    progressBar(currentFile, totalFiles);
  }

  console.log('\nOperazione completata.');
}

// Avvia lo script
renameFiles('./')
  .catch((err) => console.error('Errore:', err));
