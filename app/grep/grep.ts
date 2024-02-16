import { readFileSync } from 'fs';

const args = process.argv.slice(2);
const fileName = args[0];
const searchString = args[1];

const contents = readFileSync(fileName, 'utf8');

const lines = contents.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(searchString)) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}
