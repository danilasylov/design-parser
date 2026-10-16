import {readFileSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
let build;
try {({build}=require('esbuild'));}
catch {({build}=require('/tmp/vesper-runtime/node_modules/esbuild'));}
const dir=new URL('.',import.meta.url);
const result=await build({entryPoints:[new URL('scene.js',dir).pathname],nodePaths:['/tmp/vesper-runtime/node_modules'],bundle:true,minify:true,write:false,format:'iife',legalComments:'inline',target:'es2020'});
const html=readFileSync(new URL('template.html',dir),'utf8')
 .replace('/*__TOKENS__*/',readFileSync(new URL('design-system/tokens.css',dir),'utf8'))
 .replace('/*__INTERACTION__*/',()=>readFileSync(new URL('interaction.js',dir),'utf8'))
 .replace('/*__SCENE__*/',()=>result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script'));
writeFileSync(new URL('index.html',dir),html);console.log(`VESPER built: ${(Buffer.byteLength(html)/1024).toFixed(0)} KB, all scripts inline.`);
