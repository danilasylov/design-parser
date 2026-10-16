/* Catalog entries describe visual patterns. Source implementations, directions,
   timing presets and library demos are variants of those patterns. */
(function(){
  const source=window.MOTION_CATALOG;
  const definitions={
    'content.enter':['entrance_exit','Появление контента'],
    'content.exit':['entrance_exit','Исчезновение контента'],
    'motion.rotate':['transforms','Вращение элемента'],
    'motion.flip':['transforms','Переворот элемента'],
    'motion.move':['transforms','Перемещение элемента'],
    'motion.swing':['transforms','Поворот вокруг края'],
    'material.shadow':['material','Изменение тени элемента'],
    'typography.tracking':['typography','Изменение межбуквенного интервала'],
    'attention.shake':['attention','Тряска и вибрация'],
    'attention.blink':['attention','Мигание и мерцание'],
    'attention.jello':['attention','Желейная деформация'],
    'attention.wobble':['attention','Раскачивание'],
    'attention.bounce':['attention','Подпрыгивание'],
    'attention.pulse':['attention','Пульсация'],
    'background.ken-burns':['background','Приближение и панорамирование фона'],
    'background.pan':['background','Панорамирование фона']
  };
  function keyFor(e){
    // Same visible mechanism stays one pattern across direction, trigger and source.
    const aliases={
      'scroll.reveal':'content.enter',
      'experimental.dynamic-css-masks-with-custom-properties-and-gsap':'transitions.mask',
      'experimental.how-to-create-a-fullscreen-video-opening-animation':'transitions.mask',
      'experimental.baraja-a-plugin-for-spreading-items-in-a-card-like-fashion':'gallery.stack',
      'experimental.swatch-book-with-css3-and-jquery':'gallery.stack',
      'experimental.bouncing-off-the-walls':'particles_physics.rigid_body',
      'experimental.css-holographic-masks':'material.glass',
      'experimental.css-minecraft':'spatial.scene',
      'experimental.elektrik-brush':'cursor.trail',
      'experimental.mobile-pull-to-share-interaction-experiment':'microinteraction.drag'
    };
    if(aliases[e.class_id])return aliases[e.class_id];
    if(['entrance_exit.content','entrance_exit.fade_blur'].includes(e.class_id))return 'content.enter';
    if(e.provider!=='animista')return e.class_id;
    const g=e.group;
    if(e.source_category==='entrances'||g==='scale-up')return 'content.enter';
    if(e.source_category==='exits'||g==='scale-down')return 'content.exit';
    if(e.source_category==='basic'){
      if(g.startsWith('rotate'))return 'motion.rotate';
      if(g.startsWith('flip'))return 'motion.flip';
      if(g.startsWith('slide'))return 'motion.move';
      if(g.startsWith('shadow'))return 'material.shadow';
      if(g==='swing')return 'motion.swing';
    }
    if(e.source_category==='text'){
      if(g.startsWith('tracking'))return 'typography.tracking';
      if(g==='focus-in')return 'typography.reveal';
      if(g==='blur-out')return 'typography.blur';
      if(g==='flicker')return 'attention.blink';
      if(g.startsWith('shadow'))return 'typography.shadow';
      if(g==='text-pop-up'||g==='pop-up')return 'typography.three_d';
    }
    if(e.source_category==='attention')return ({vibrate:'attention.shake',shake:'attention.shake',flicker:'attention.blink',blink:'attention.blink',jello:'attention.jello',wobble:'attention.wobble',bounce:'attention.bounce',pulsate:'attention.pulse'})[g]||e.class_id;
    if(e.source_category==='background')return ({'ken-burns':'background.ken-burns','bg-pan':'background.pan','color-change':'background.gradient'})[g]||e.class_id;
    return e.class_id;
  }
  const grouped=new Map();
  for(const e of source.examples){
    const key=keyFor(e),def=definitions[key],cl=source.classes.find(c=>c.id===key);
    if(!grouped.has(key))grouped.set(key,{id:'pattern.'+key,key,name:def?.[1]||cl?.name_ru||e.class_label,type_id:def?.[0]||cl?.type_id||e.type_id,variants:[]});
    grouped.get(key).variants.push(e);
  }
  const patterns=[...grouped.values()];
  for(const p of patterns){p.providers=[...new Set(p.variants.map(e=>e.provider))];p.type_label=source.types[p.type_id];}
  window.MOTION_PATTERN_CATALOG={patterns,source};
})();
