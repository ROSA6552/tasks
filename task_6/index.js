import { readFileSync } from 'fs';

// macOS, Linux, and Windows
const data = readFileSync('text.txt', 'utf8');

const words = data.split(' ');

for (let i = 0; i < words.length; i++) {
  const t = words[i];
  for (let j = 0; j < t.length - 1; j++) {
    if (t[j] === 'о' && t[j+1] === 'в') {
      if (t.slice(-1) === ',' || t.slice(-1) === '.') {
        console.log(t.substring(0, t.length - 1));
      }
      else {
        console.log(t);
      }
      
    }
  }
}