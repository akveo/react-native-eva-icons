import fs from 'fs';
import path from 'path';
import stringifyObject from 'stringify-object';
import {
  createReactNativeElementName,
  getFileNameFromPath,
} from './common';

type IconsRegistry = { [name: string]: any };

main();

function main() {
  const { [0]: sourceDir } = process.argv.splice(2);

  generateIndexForSourceDir(sourceDir);
}

function generateIndexForSourceDir(sourceDir: string) {
  const indexPath: string = path.resolve(sourceDir, 'index.ts');

  const iconFiles: string[] = fs.readdirSync(sourceDir);

  const exportObject: IconsRegistry = iconFiles.reduce((acc: IconsRegistry, file: string): IconsRegistry => {
    const sourceFilePath: string = path.resolve(sourceDir, file);
    const fileName: string = getFileNameFromPath(sourceFilePath);

    const elementName: string = createReactNativeElementName(fileName);

    const exportStatement: string = createImportStatementForElement(elementName, fileName);

    fs.appendFileSync(indexPath, exportStatement);

    return { ...acc, [fileName]: elementName };
  }, {});

  const output: string = stringifyObject(exportObject, {
    transform: transformOutputValue,
  });

  fs.appendFileSync(indexPath, `export default ${output};`);
}

function createImportStatementForElement(elementName: string, fileName: string): string {
  return `import { ${elementName} } from './${fileName}';\n`;
}

function transformOutputValue(val: any[] | object, i: number | string | symbol, value: string): string {
  return value.replace(new RegExp('\'', 'g'), '');
}
