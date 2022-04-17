import { readMetadataInDir } from "./metadataService.js";

export default function cmsMetadataResolver() {
  const virtualModuleId = '/src/lib/content'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  let metadata = new Map();
  let list = [];
  let code;
  return {
    name: 'vite-plugin-cms-metadata-resolver',
    async buildStart() {
      const filenames = readMetadataInDir("./src/routes/content");
      for await (let value of filenames) {
        if (!metadata.has(value.path)) {
          metadata.set(value.path, value);
          list.push(value);
        }
      }
      code = JSON.stringify(list);
    },
    resolveId(id) {
      if (id.endsWith(virtualModuleId)) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id.endsWith(resolvedVirtualModuleId)) {
        return `export const all = ${code};`
      }
    }
  }
}
