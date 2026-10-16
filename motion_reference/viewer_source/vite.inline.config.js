import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import fs from 'node:fs';
const externalMap=JSON.parse(fs.readFileSync('./external-map.json','utf8'));
const offlineAssets={name:'local-original-assets',transform(code,id){
  if(!/\.(tsx|jsx)$/.test(id))return null;
  let next=code.replaceAll('/pixel-image-demo.jpg','/live/magic-ui/pixel-image-demo.jpg');
  for(const [url,value] of Object.entries(externalMap))if(value.status==='saved')next=next.split(url).join('/live/magic-ui/'+value.local.replace(/^\.\//,''));
  return next===code?null:next;
}};
export default defineConfig({
  define:{'process.env.NODE_ENV':JSON.stringify('production')},
  plugins:[offlineAssets,react(),tailwindcss(),{name:'shadow-root-styles',enforce:'post',generateBundle(options,bundle){for(const asset of Object.values(bundle))if(asset.type==='asset'&&asset.fileName.endsWith('.css')){asset.source=String(asset.source).replaceAll(':root',':host');const rules=String(asset.source).match(/@property\s+[\w-]+\s*\{[^}]*\}/g)||[];this.emitFile({type:'asset',fileName:'properties.css',source:rules.join('\n')});}}}],
  resolve:{preserveSymlinks:true,alias:{'@/lib/utils':path.resolve('../originals/magic-ui/registry/lib/utils.ts'),'next/link':path.resolve('./next-link.jsx'),'next-themes':path.resolve('./native-theme.jsx'),'@':path.resolve('../originals/magic-ui')}},
  build:{outDir:'../live/native-magic-ui',emptyOutDir:true,lib:{entry:path.resolve('inline.jsx'),formats:['es'],fileName:()=> 'runtime.js',cssFileName:'style'},chunkSizeWarningLimit:1200}
});
