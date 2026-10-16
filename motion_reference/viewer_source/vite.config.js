import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import fs from 'node:fs';
const externalMap=JSON.parse(fs.readFileSync('./external-map.json','utf8'));
const offlineAssets={name:'local-original-assets',transform(code,id){if(!/\.(tsx|jsx)$/.test(id))return null;let next=code.replaceAll('/pixel-image-demo.jpg','./pixel-image-demo.jpg');for(const [u,v] of Object.entries(externalMap)){if(v.status==='saved')next=next.split(u).join(v.local)}return next===code?null:next;}};
export default defineConfig({base:'./',plugins:[offlineAssets,react(),tailwindcss()],resolve:{alias:{'@/lib/utils':path.resolve('../originals/magic-ui/registry/lib/utils.ts'),'next/link':path.resolve('./next-link.jsx'),'@':path.resolve('../originals/magic-ui')}},build:{outDir:'../live/magic-ui',emptyOutDir:true,chunkSizeWarningLimit:1200}});
