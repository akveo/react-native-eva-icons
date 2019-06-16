import fs from 'fs';
import * as IconService from '../src/generate';
import * as ModuleService from '../src/generateIndex';

main();

function main() {
  const { [0]: destDir } = process.argv.splice(2);

  fs.mkdirSync(destDir);

  IconService.generateIconsForSourceDir('./node_modules/eva-icons/fill/svg', destDir);
  IconService.generateIconsForSourceDir('./node_modules/eva-icons/outline/svg', destDir);

  ModuleService.generateIndexForSourceDir(destDir);
}
