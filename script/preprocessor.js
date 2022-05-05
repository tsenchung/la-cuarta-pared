import MarkdownIt from "markdown-it";
import FootnotePlugin from "markdown-it-footnote";
import YAML from 'yaml';
import readingTime from "reading-time";
import { readMetadataInSvelteContent } from "./metadataService.js";
function layout(metadata, content) {
  return `
    <script>
      import Content from '$lib/components/Content/Content.svelte';
    </script>
    <Content entry={${JSON.stringify(metadata)}}>${content}</Content>`;
}

export function html() {
  return {
    markup({ filename, content }) {
      if (!filename.endsWith('.svelte')) {
        return { code: content };
      }
      const [contentWithoutFrontMatter, metaObj] = readMetadataInSvelteContent(filename, content);
      if (!metaObj) {
        return { code: content };
      }
      const c = layout(metaObj, contentWithoutFrontMatter);
      return { code: c };
    }
  }
}

export function markdown() {
  return {
    markup(params) {
      if (!params.filename.endsWith('.md')) {
        return { code: params.content }
      }
      const md = MarkdownIt().use(FootnotePlugin);
      const content = md.render(
        params.content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '')
      );
      const { filename } = params;
      const metaMatches = params.content.match(/^\-\-\-[\s\S]*?\-\-\-/);

      if (metaMatches) {
        const meta = metaMatches[0];
        let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
        const path = filename.replace(/\.md$/, '/').replace(/^.*routes/, '');
        metaObj['path'] = path;
        metaObj['readingTime'] = readingTime(content).minutes;
        return { code: layout(metaObj, content) };
      }
      return { code: content }
    }
  };
}
