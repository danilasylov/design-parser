import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{}};
for(const file of ['catalog_data.js','pattern-catalog.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const {patterns,source}=context.window.MOTION_PATTERN_CATALOG;
const ids=patterns.flatMap(p=>p.variants.map(e=>e.id));
assert.equal(ids.length,source.examples.length,'No original implementation is lost');
assert.equal(new Set(ids).size,ids.length,'Each implementation belongs to one pattern');
assert.equal(new Set(patterns.map(p=>p.id)).size,patterns.length,'Pattern IDs are unique');
for(const p of patterns){assert.ok(source.types[p.type_id]);assert.ok(p.name);assert.ok(p.variants.length);}
const find=id=>patterns.find(p=>p.variants.some(e=>e.id===id));
assert.equal(find('animista.scale-up-center').id,find('animista.scale-up-top').id,'Direction is a variant');
assert.equal(find('animista.scale-up-tr').key,'content.enter');
assert.equal(find('animista.fade-in').id,find('animista.slide-in-top').id,'Entrance techniques belong to the content appearance pattern');
assert.notEqual(find('animista.fade-in').id,find('animista.fade-out').id,'Appearance and disappearance remain distinct');
assert.equal(find('magic-ui.animated-grid-pattern').id,find('magic-ui.interactive-grid-pattern').id,'Automatic and interactive grids are implementations of a grid pattern');
assert.equal(find('react-bits.animated-content').id,find('animista.fade-in').id,'A pattern can contain implementations from several libraries');
for(const group of ['slide-in','slide-out','slide','rotate','flip','scale-up','scale-down']){
  const variants=source.examples.filter(e=>e.provider==='animista'&&e.group===group);
  if(variants.length>1)assert.equal(new Set(variants.map(e=>find(e.id).id)).size,1,group+': directions never create extra cards');
}
for(const pattern of patterns)assert.ok(!/(?:^|\.)(?:left|right|top|bottom|tl|tr|bl|br)$/.test(pattern.key),'Direction is not a pattern ID');
const scrollReveal=source.examples.filter(e=>e.class_id==='scroll.reveal');
for(const example of scrollReveal)assert.equal(find(example.id).key,'content.enter','Scroll is a trigger, not another appearance pattern');
const output=JSON.parse(fs.readFileSync(path.join(root,'pattern_catalog.json'),'utf8'));
assert.equal(output.counts.patterns,patterns.length);
assert.equal(output.patterns.reduce((sum,p)=>sum+p.variants.length,0),source.examples.length);
console.log('Pattern integrity and semantic grouping checks passed');
