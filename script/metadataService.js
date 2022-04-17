import { readdir, readFile } from 'fs/promises';
import YAML from 'yaml';
import readingTime from "reading-time";

export async function* readMetadataInDir(dir) {
  const files = await readdir(dir);
  for (let i = 0; i <= files.length - 1; i++) {
    const filename = dir + '/' + files[i]
    const content = await readFile(filename, { encoding: "utf-8" });

    const metaMatches = content.match(/^\-\-\-[\s\S]*?\-\-\-/);
    if (metaMatches) {
      const meta = metaMatches[0];
      let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
      const path = filename.replace(/\.svelte$/, '/').replace(/\.md$/, '/').replace(/^.*routes/, '');
      metaObj['path'] = path;
      const contentWithoutFrontMatter = content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '');
      metaObj['readingTime'] = readingTime(contentWithoutFrontMatter).minutes;
      yield metaObj;
    }
  }
}