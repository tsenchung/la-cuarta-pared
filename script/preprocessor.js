import MarkdownIt from "markdown-it";
import FootnotePlugin from "markdown-it-footnote";
import YAML from 'yaml';
import readingTime from "reading-time";

function layout(metadata, content) {
  return `
    <script>
      import Title from '$lib/components/Title.svelte';
      let entry = ${JSON.stringify(metadata)};
    </script>
    <Title {entry} />
    <section class="content">${content}</section>`;
}

export function html() {
  return {
    markup({ content, filename }) {
      if (!filename.endsWith('.svelte')) {
        return { code: content }
      }
      const metaMatches = content.match(/^\-\-\-[\s\S]*?\-\-\-/);
      if (!metaMatches) {
        return { code: content };
      }
      const meta = metaMatches[0];
      let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
      const path = filename.replace(/\.svelte$/, '/').replace(/^.*routes/, '');
      metaObj['path'] = path;
      const contentWithoutFrontMatter = content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '');
      metaObj['readingTime'] = readingTime(contentWithoutFrontMatter).minutes;
      const c = layout(metaObj, content);
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
