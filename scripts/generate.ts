import fs from 'fs';
import path from 'path';

// TODO: 1. Apply props
// TODO: 2. Replace Attributes
// TODO: 3. Formatting

interface ReplacementMap { [source: string]: string }

const PATTERN_FILE_NAME: RegExp = /-([a-z0-9])/g;

const ELEMENT_REPLACE_MAP: ReplacementMap = {
  'svg': 'Svg',
  'rect': 'Svg.Rect',
  'circle': 'Svg.Circle',
  'ellipse': 'Svg.Ellipse',
  'line': 'Svg.Line',
  'polygon': 'Svg.Polygon',
  'polyline': 'Svg.Polyline',
  'path': 'Svg.Path',
  'text': 'Svg.Text',
  'tspan': 'Svg.TSpan',
  'textPath': 'Svg.TextPath',
  'g': 'Svg.G',
  'use': 'Svg.Use',
  'symbol': 'Svg.Symbol',
  'defs': 'Svg.Defs',
  'image': 'Svg.Image',
  'clipPath': 'Svg.ClipPath',
  'linearGradient': 'Svg.LinearGradient',
  'radialGradient': 'Svg.RadialGradient',
  'mask': 'Svg.Mask',
  'pattern': 'Svg.Pattern',
};

main();

function main() {
  const { [0]: sourceDir, [1]: destDir } = process.argv.splice(2);

  generateIconsForSourceDir(sourceDir, destDir);
}

function generateIconsForSourceDir(sourceDir: string, destDir: string) {
  const iconFiles: string[] = fs.readdirSync(sourceDir);

  iconFiles.forEach((file: string) => {
    const sourceFilePath: string = path.resolve(sourceDir, file);

    const fileName: string = getFileNameFromPath(sourceFilePath);
    const destFilePath: string = path.resolve(destDir, `${fileName}.tsx`);

    const reactNativeSvgSource: string = createReactNativeSvgSource(sourceFilePath);

    fs.writeFileSync(destFilePath, reactNativeSvgSource);
  });
}

function createReactNativeSvgSource(filePath: string): string {
  const fileName: string = getFileNameFromPath(filePath);

  const sourceSvg: string = fs.readFileSync(filePath).toString();

  const reactNativeSvg: string = replaceSourceSvgWithMap(sourceSvg, ELEMENT_REPLACE_MAP);
  const reactNativeElementName: string = createReactNativeElementName(fileName, PATTERN_FILE_NAME);

  return createReactNativeElementSource(reactNativeElementName, reactNativeSvg);
}

function createReactNativeElementSource(name: string, svg: string): string {
  return [
    'import React from \'react\';',
    'import Svg from \'react-native-svg\';',
    `export const ${name} = (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (`,
    svg,
    ');',
  ].join('\n\n');
}

function createReactNativeElementName(fileName: string, fileNamePattern: RegExp): string {
  const camelCaseString: string = createCamelCaseString(fileName, fileNamePattern);

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

function replaceSourceSvgWithMap(source: string, map: ReplacementMap): string {
  return Object.keys(map).reduce((result: string, element: string): string => {
    return replaceElementWithReactNativeSvgElement(result, element);
  }, source);
}

function replaceElementWithReactNativeSvgElement(source: string, element: string): string {
  const replacementMap: ReplacementMap = createTagsReplacementMapForElement(element);

  return Object.keys(replacementMap).reduce((result: string, replaceTag: string): string => {
    const replacingTag: string = replacementMap[replaceTag];

    return result.replace(new RegExp(replaceTag, 'g'), replacingTag);
  }, source);
}

function createTagsReplacementMapForElement(element: string): ReplacementMap {
  const reactNativeSvgElement: string = ELEMENT_REPLACE_MAP[element];

  return {
    [`<${element}`]: `<${reactNativeSvgElement}`,
    [`</${element}`]: `</${reactNativeSvgElement}`,
  };
}

function getFileNameFromPath(sourcePath: string): string {
  return path.basename(sourcePath, path.extname(sourcePath));
}




