import * as Service from '../src/generateIndex';

main();

function main() {
  const { [0]: sourceDir } = process.argv.splice(2);

  Service.generateIndexForSourceDir(sourceDir);
}
