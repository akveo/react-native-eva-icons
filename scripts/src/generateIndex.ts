import fs from 'fs';
import path from 'path';
import { getFileNameFromPath } from './common';
import { pascalCase, paramCase } from 'change-case';

const OUTPUT_START: string = [
  'import * as React from \'react\';',
  'import * as Svg from \'react-native-svg\';',
  `export const findIconByName = (name: string): React.ComponentType<Svg.SvgProps> | undefined => {`,
  `switch(name) {`,
].join('\n');

const OUTPUT_END: string = [
  `}`,
  `};`,
].join('\n');


export function generateIndexForSourceDir(sourceDir: string) {
  const indexPath: string = path.resolve(sourceDir, 'index.ts');

  const iconFiles: string[] = fs.readdirSync(sourceDir);

  fs.appendFileSync(indexPath, OUTPUT_START);

  iconFiles.forEach((file: string) => {
    const sourceFilePath: string = path.resolve(sourceDir, file);
    const fileName: string = getFileNameFromPath(sourceFilePath);

    const caseStatement: string = createCaseStatementForElement(fileName);

    fs.appendFileSync(indexPath, `\n${caseStatement}\n`);
  });

  fs.appendFileSync(indexPath, OUTPUT_END);
}

function createCaseStatementForElement(fileName: string): string {
  return `case '${paramCase(fileName)}': return require('./${pascalCase(fileName)}').default;`;
}
