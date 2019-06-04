import path from 'path';

const PATTERN_FILE_NAME: RegExp = /-([a-z0-9])/g;

export function getFileNameFromPath(sourcePath: string): string {
  return path.basename(sourcePath, path.extname(sourcePath));
}

export function createReactNativeElementName(fileName: string): string {
  const camelCaseString: string = createCamelCaseString(fileName, PATTERN_FILE_NAME);

  return createCapitalizeString(camelCaseString);
}

function createCamelCaseString(source: string, sourcePattern: RegExp): string {
  return source.replace(sourcePattern, (part: string): string => {
    return part[1].toUpperCase();
  });
}

function createCapitalizeString(source: string): string {
  return source.charAt(0).toUpperCase() + source.slice(1);
}
