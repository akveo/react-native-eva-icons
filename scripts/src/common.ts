import path from 'path';

export function getFileNameFromPath(sourcePath: string): string {
  return path.basename(sourcePath, path.extname(sourcePath));
}
