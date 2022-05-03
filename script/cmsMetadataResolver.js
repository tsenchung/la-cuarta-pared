import { readMetadataInDir, readMetadataInFile } from './metadataService.js';
import { Metadata } from './metadata.js';
export default function cmsMetadataResolver() {
  const virtualModuleId = 'virtual:content';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  let metadataObj = new Metadata();
  let metadata = new Map();
  return {
    name: 'vite-plugin-cms-metadata-resolver',
    async buildStart() {
      const filenames = readMetadataInDir('./src/routes/content');
      for await (let value of filenames) {
        if (!metadata.has(value.path)) {
          metadata.set(value.path, value);
        }
        metadataObj.metadataFound(value);
      }
    },
    resolveId(id) {
      if (id.endsWith(virtualModuleId)) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id.endsWith(resolvedVirtualModuleId)) {
        return metadataObj.render();
      }
    },
    async handleHotUpdate({ file, server, read, modules }) {
      if (file.match(/\/src\/routes\/content/)) {
        const content = await read();
        const [_, metaObj] = readMetadataInFile(file, content);
        if (metaObj) {
          const m = server.moduleGraph.getModuleById('\x00virtual:content');
          metadata.set(metaObj['path'], metaObj);
          modules.push(m);
        }
      }
      return modules;
    }
  };
}
