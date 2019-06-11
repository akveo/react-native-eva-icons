import fs from 'fs';
import path from 'path';
import { getFileNameFromPath } from './common';
import { pascal } from 'change-case';

interface ReplacementMap {
  [source: string]: string;
}

const ROOT_TAG: string = 'Svg.Svg';

const ELEMENT_REPLACE_MAP: ReplacementMap = {
  svg: 'Svg.Svg',
  rect: 'Svg.Rect',
  circle: 'Svg.Circle',
  ellipse: 'Svg.Ellipse',
  line: 'Svg.Line',
  polygon: 'Svg.Polygon',
  polyline: 'Svg.Polyline',
  path: 'Svg.Path',
  text: 'Svg.Text',
  tspan: 'Svg.TSpan',
  textPath: 'Svg.TextPath',
  g: 'Svg.G',
  use: 'Svg.Use',
  symbol: 'Svg.Symbol',
  defs: 'Svg.Defs',
  image: 'Svg.Image',
  clipPath: 'Svg.ClipPath',
  linearGradient: 'Svg.LinearGradient',
  radialGradient: 'Svg.RadialGradient',
  mask: 'Svg.Mask',
  pattern: 'Svg.Pattern',
};

const ATTRIBUTES_TO_REMOVE: string[] = [
  'xmlns',
];

main();

function main() {
  const { [0]: sourceDir, [1]: destDir } = process.argv.splice(2);

  generateIconsForSourceDir(sourceDir, destDir);

}

function generateIconsForSourceDir(sourceDir: string, destDir: string) {
  const iconFiles: string[] = fs.readdirSync(sourceDir);

  iconFiles.forEach((file: string) => {
    const sourceFilePath: string = path.resolve(sourceDir, file);

    const fileName: string = pascal(getFileNameFromPath(sourceFilePath));
    const destFilePath: string = path.resolve(destDir, `${fileName}.tsx`);

    const reactNativeSvgSource: string = createReactNativeSvgSource(sourceFilePath);

    fs.writeFileSync(destFilePath, reactNativeSvgSource);
  });
}

function createReactNativeSvgSource(filePath: string): string {
  const sourceSvg: string = fs.readFileSync(filePath).toString();

  const reactNativeSvg: string = createReactNativeSvgElementFromSource(sourceSvg);

  return createReactNativeElementSource(reactNativeSvg);
}

function createReactNativeElementSource(svg: string): string {
  return [
    'import * as React from \'react\';',
    'import * as Svg from \'react-native-svg\';',
    `export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (`,
    svg,
    ');',
  ].join('\n');
}

function createReactNativeSvgElementFromSource(source: string): string {
  const withReplacedElements: string = replaceSourceSvgWithMap(source, ELEMENT_REPLACE_MAP);

  const cleanedFromUnnecessaryAttributes: string = removeUnnecessaryAttributes(withReplacedElements, ATTRIBUTES_TO_REMOVE);

  return assignPropsToSourceElement(cleanedFromUnnecessaryAttributes);
}

function replaceSourceSvgWithMap(source: string, map: ReplacementMap): string {
  return Object.keys(map).reduce((result: string, element: string): string => {
    return replaceElementWithReactNativeSvgElement(result, element);
  }, source);
}

function removeUnnecessaryAttributes(source: string, attributes: string[]): string {
  return Object.values(attributes).reduce((result: string, attribute: string): string => {
    return result.replace(new RegExp(`${attribute}=["'].*?["']`, 'gm'), '');
  }, source);
}

function assignPropsToSourceElement(source: string): string {
  return source.replace(new RegExp(`<${ROOT_TAG}`), `<${ROOT_TAG} {...props}`);
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
