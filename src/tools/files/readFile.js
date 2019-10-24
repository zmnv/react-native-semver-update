import { readFileSync } from 'fs';

export const readFile = inputPath => readFileSync(inputPath, 'utf8');
