
function getProgressBar(completed, total) {
  const percent = ((completed / total) * 100).toFixed(2);
  const barLength = 20; // Lunghezza della barra di progresso
  const completedLength = Math.round((completed / total) * barLength);
  const bar = '█'.repeat(completedLength) + '-'.repeat(barLength - completedLength);
  return `[${bar}] ${percent}% (${completed}/${total})`
}

function printProgress(completed, total) {
  process.stdout.write(`\r${getProgressBar(completed, total)}`);
}

module.exports = printProgress
