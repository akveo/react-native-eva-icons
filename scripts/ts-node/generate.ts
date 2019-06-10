import * as Service from '../src/generate';

main();

function main() {
  const { [0]: sourceDir, [1]: destDir } = process.argv.splice(2);

  Service.generateIconsForSourceDir(sourceDir, destDir);
}
