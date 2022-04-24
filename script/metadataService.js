import { readdir, readFile } from 'fs/promises';
import YAML from 'yaml';
import readingTime from "reading-time";

export async function* readMetadataInDir(dir) {
  const files = await readdir(dir);
  for (let i = 0; i <= files.length - 1; i++) {
    const filename = dir + '/' + files[i]
    const content = await readFile(filename, { encoding: "utf-8" });
    const [_, metaObj] = readMetadataInFile(filename, content);
    if (metaObj) {
      yield metaObj;
    }
  }
}

export function readMetadataInFile(filename, content) {
  if (filename.match(/\.svelte$/)) {
    return readMetadataInSvelteContent(filename, content);
  }
  else if (filename.match(/\.md$/)) {
    return readMetadataInMarkdownFile(filename, content);
  }
}

export function readMetadataInMarkdownFile(filename, content) {
  const matches = content.match(/^\-\-\-[\s\S]*?\-\-\-/);
  if (!matches) {
    return [content, null];
  }
  const meta = matches[0];
  let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
  const contentWithoutFrontMatter = content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '');
  metaObj['readingTime'] = readingTime(contentWithoutFrontMatter).minutes;
  const path = filename.replace(/\.md$/, '/').replace(/^.*routes/, '');
  metaObj['path'] = path;
  return [contentWithoutFrontMatter, metaObj];
}

export function readMetadataInSvelteContent(filename, content) {
  const matches = content.match(/^\<!\-\-\-[\s\S]*?\-\-\-\>/);
  if (!matches) {
    return [content, null];
  }
  const meta = matches[0];
  let metaObj = YAML.parse(meta.replace(/^\<!\-\-\-/, '').replace(/\-\-\-\>\s*$/, ''));
  const contentWithoutFrontMatter = content.replace(/^\<!\-\-\-[\s\S]*?\-\-\-\>/, '');
  metaObj['readingTime'] = readingTime(contentWithoutFrontMatter).minutes;
  const path = filename.replace(/\.svelte$/, '/').replace(/^.*routes/, '');
  metaObj['path'] = path;
  return [contentWithoutFrontMatter, metaObj];
}