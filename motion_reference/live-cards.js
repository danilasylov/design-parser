/* Each effect is mounted as real DOM in the catalog. Shadow roots scope the
   original styles without creating another browsing context or intercepting input. */
class LiveCardManager {
  constructor(){
    this.items=new Set();this.suspended=false;
    this.observer=new IntersectionObserver(entries=>{
      for(const entry of entries){const item=entry.target.liveItem;if(item)item.visible=entry.isIntersecting;}
      this.sync();
    });
    document.addEventListener('visibilitychange',()=>this.sync());
    this.magicRuntime=null;
  }
  create(example,full=false){
    const el=document.createElement('div');el.className='media live-media';
    el.setAttribute('role','group');el.setAttribute('aria-label',example.name+' — пример паттерна');
    const stage=document.createElement('div');stage.className='live-stage';el.append(stage);
    const item={el,stage,example,full,visible:false,mounted:false,generation:0,dispose:null};
    el.liveItem=item;this.items.add(item);this.observer.observe(el);return el;
  }
  sync(){for(const item of this.items){
    const active=item.visible&&!document.hidden&&(!this.suspended||item.full);
    if(active&&!item.mounted)this.mount(item);
    if(!active&&item.mounted)this.unmount(item);
  }}
  async mount(item){
    item.mounted=true;const generation=++item.generation;
    const host=document.createElement('div');host.className='native-animation';item.stage.replaceChildren(host);
    const shadow=host.attachShadow({mode:'open'});
    if(item.example.provider==='animista'){
      const data=window.NATIVE_ANIMISTA;
      const key=item.example.live_preview.split('#')[1];const variant=data.variants[key];
      const sheet=document.createElement('link');sheet.rel='stylesheet';sheet.href='originals/animista/offline-site.css';
      const style=document.createElement('style');style.textContent=':host{background:#9db5ca;display:block;overflow:hidden}#anim-stage{padding:0!important;margin:0!important;position:absolute!important;inset:0!important;width:100%!important;height:100%!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:hidden!important;perspective-origin:50% 50%!important}.anim-object.active{z-index:1}';
      const template=document.createElement('template');template.innerHTML=data.template;
      shadow.append(sheet,style,template.content.cloneNode(true));
      const object=shadow.querySelector(variant.parameters.useObject);object.classList.add('active');
      const play=()=>{object.style.animation='none';void object.offsetWidth;object.style.animation=variant.animation_css;};
      sheet.onload=()=>{if(item.mounted&&item.generation===generation)play();};
      host.addEventListener('pointerenter',play);host.addEventListener('pointerdown',play);
      host.tabIndex=0;host.setAttribute('aria-label',item.example.name+' — наведи курсор или нажми для повтора');
      host.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();play();}});
      item.dispose=()=>{sheet.onload=null;host.removeEventListener('pointerenter',play);host.removeEventListener('pointerdown',play);};
      play();return;
    }
    const note=document.createElement('span');note.className='live-placeholder';note.textContent='Загрузка…';item.stage.append(note);
    try{
      const runtime=await(this.magicRuntime??=import('./live/native-magic-ui/runtime.js'));
      if(!item.mounted||item.generation!==generation)return;
      const sheet=document.createElement('link');sheet.rel='stylesheet';sheet.href='live/native-magic-ui/style.css';
      const container=document.createElement('div');container.style.cssText='width:100%;height:100%';shadow.append(sheet,container);
      const demo=new URL(item.example.live_preview,location.href).searchParams.get('demo');
      item.dispose=runtime.mount(container,demo);note.remove();
    }catch(error){
      if(!item.mounted||item.generation!==generation)return;
      note.textContent=location.protocol==='file:'?'Открой каталог через «Открыть каталог.command», чтобы запустить компоненты.':'Не удалось загрузить компонент. Обнови страницу.';
      console.error('Native animation:',item.example.id,error);
    }
  }
  release(el){const item=el.liveItem;if(!item)return;this.observer.unobserve(el);this.unmount(item);this.items.delete(item);}
  unmount(item){item.mounted=false;item.generation++;item.dispose?.();item.dispose=null;item.stage.replaceChildren();}
  releaseDetail(){for(const item of this.items)if(item.full){this.observer.unobserve(item.el);this.unmount(item);this.items.delete(item);}}
  suspend(value){this.suspended=value;this.sync();}
  clear(){this.observer.disconnect();for(const item of this.items)this.unmount(item);this.items.clear();}
}
