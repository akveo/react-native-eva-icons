import path from 'path';
import fs from 'fs';
import rimraf from 'rimraf';
import * as Service from '../src/generate';

describe('@generate: service checks', () => {

  const SOURCE_DIR: string = path.resolve(__dirname, '../../node_modules/eva-icons');
  const SOURCE_DIR_FILL: string = path.resolve(SOURCE_DIR, 'fill/svg');
  const SOURCE_DIR_OUTLINE: string = path.resolve(SOURCE_DIR, 'outline/svg');
  const DEST_DIR: string = path.resolve(__dirname, './tmp');

  beforeAll(() => {
    makeDirForGeneratedIcons(DEST_DIR);
  });

  afterAll(() => {
    removeDirForGeneratedIcons(DEST_DIR);
  });

  function makeDirForGeneratedIcons(path: string) {
    fs.mkdirSync(path);
  }

  function removeDirForGeneratedIcons(path: string) {
    rimraf.sync(path);
  }

  it('* generates proper number of icons', () => {
    Service.generateIconsForSourceDir(SOURCE_DIR_FILL, DEST_DIR);
    Service.generateIconsForSourceDir(SOURCE_DIR_OUTLINE, DEST_DIR);

    const fillIconFiles: string[] = fs.readdirSync(SOURCE_DIR_FILL);
    const outlineIconFiles: string[] = fs.readdirSync(SOURCE_DIR_OUTLINE);
    const resultIconFiles: string[] = fs.readdirSync(DEST_DIR);

    const expectFilesCount: number = fillIconFiles.length + outlineIconFiles.length;

    expect(resultIconFiles.length).toEqual(expectFilesCount);
  });

});
