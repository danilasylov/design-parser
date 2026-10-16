// Vanilla adaptation of React Bits ModelViewer: fitted objects, studio lighting,
// idle rotation, floating motion, pointer tilt and drag rotation. No React runtime.
import * as T from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const views = [];
let elapsed = 0, last = 0, frame = 0, lastDraw = 0;
const state = window.vesperMotion;
const blue = 0x1a2ffb, silver = 0xd8ddeb, dark = 0x101218;
function material(color, roughness=.2, metalness=.92) {
  return new T.MeshPhysicalMaterial({color, roughness, metalness, clearcoat:1, clearcoatRoughness:.15});
}
function mesh(g,m,parent,x=0,y=0,z=0) { const o=new T.Mesh(g,m);o.position.set(x,y,z);parent.add(o);return o; }
function object(kind) {
  const group=new T.Group(); const cobalt=material(blue,.2,.75), chrome=material(silver,.16,1);
  if(kind===0) {
    const a=mesh(new T.TorusKnotGeometry(1.18,.31,220,32,2,3),cobalt,group);
    a.rotation.set(.1,-.2,.4);a.position.x=-.3;
    const b=mesh(new T.TorusKnotGeometry(.98,.20,180,28,2,3),chrome,group,.85,.05,-.1);
    b.rotation.set(1.1,.6,-.7);
    [[-2.5,.7,-.6,.28],[2.7,-.5,-.8,.38],[-1.8,-1.3,.6,.16]].forEach(([x,y,z,r],i)=>{
      const s=mesh(new T.SphereGeometry(r,32,24),i===1?cobalt:chrome,group,x,y,z);s.userData.satellite=true;
    });
  } else if(kind===1) {
    for(let i=0;i<7;i++) {
      const r=mesh(new T.TorusGeometry(.62+i*.15,.055,16,96),i%3?chrome:cobalt,group);
      r.rotation.set(.4+i*.17,i*.20,0);r.userData.ring=i;
    }
    mesh(new T.SphereGeometry(.43,40,32),cobalt,group);
  } else {
    for(let i=0;i<13;i++) {
      const a=i/13*Math.PI*2;
      const petal=mesh(new T.TorusGeometry(.75,.14,20,64),i%4===0?chrome:cobalt,group,Math.cos(a)*.55,Math.sin(a)*.55,0);
      petal.rotation.set(Math.PI/2,a,a);petal.userData.petal=i;
    }
    mesh(new T.SphereGeometry(.32,32,24),material(0xc1ff00,.26,.3),group,0,0,.3);
  }
  return group;
}
function createView(el,kind,hero=false) {
  let renderer;
  try { renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'}); }
  catch(e) {el.dataset.webgl='unavailable';return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.35));
  renderer.toneMapping=T.NeutralToneMapping;renderer.toneMappingExposure=.85;
  el.appendChild(renderer.domElement);
  const scene=new T.Scene(); const camera=new T.PerspectiveCamera(32,1,.1,100);
  camera.position.set(0,0,hero?7.9:7.8);
  const environment=new RoomEnvironment();
  const pmrem=new T.PMREMGenerator(renderer);const env=pmrem.fromScene(environment,.04);
  scene.environment=env.texture;scene.environmentIntensity=.8;
  environment.dispose();pmrem.dispose();
  scene.add(new T.HemisphereLight(0xffffff,0x101622,.6));
  const key=new T.DirectionalLight(0xffffff,2);key.position.set(2,5,4);scene.add(key);
  const rim=new T.DirectionalLight(0x667fff,1);rim.position.set(-4,0,-2);scene.add(rim);
  let art=object(kind);scene.add(art);
  if(hero) art.scale.setScalar(1.14);
  const view={el,renderer,scene,camera,art,kind,hero,visible:false,drag:false,yaw:0,pitch:0,tx:0,ty:0,frames:0};views.push(view);
  const resize=()=>{const w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();draw(view);};
  new ResizeObserver(resize).observe(el);
  new IntersectionObserver(entries=>{view.visible=entries[0].isIntersecting; if(view.visible){draw(view);wake();}},{rootMargin:'80px'}).observe(el);
  if(hero) {
    let px=0,py=0;
    el.addEventListener('pointerdown',e=>{view.drag=true;px=e.clientX;py=e.clientY;el.setPointerCapture(e.pointerId);el.classList.add('dragging');});
    el.addEventListener('pointermove',e=>{if(state.stopped())return;const r=el.getBoundingClientRect();view.tx=(e.clientX-r.left)/r.width-.5;view.ty=(e.clientY-r.top)/r.height-.5;if(view.drag){view.yaw+=(e.clientX-px)*.0065;view.pitch=T.MathUtils.clamp(view.pitch+(e.clientY-py)*.0065,-1,1);px=e.clientX;py=e.clientY;}wake();});
    const up=()=>{view.drag=false;el.classList.remove('dragging');};el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
    el.addEventListener('pointerleave',()=>{view.tx=0;view.ty=0;});
    el.addEventListener('dblclick',()=>{view.yaw=0;view.pitch=0;view.tx=0;view.ty=0;draw(view);});
    document.querySelectorAll('[data-shape]').forEach(b=>b.addEventListener('click',()=>{
      scene.remove(art);art.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
      kind=+b.dataset.shape;art=object(kind);art.scale.setScalar(1.14);scene.add(art);view.art=art;view.kind=kind;
      document.querySelectorAll('[data-shape]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
      document.getElementById('specimen').textContent=['01 / CONTINUUM','02 / RESONANCE','03 / FLORESCENCE'][kind];draw(view);wake();
    }));
  }
  resize();return view;
}
function draw(v) {
  const t=elapsed;
  v.art.rotation.y=t*.18+v.yaw+v.tx*.25;
  v.art.rotation.x=.18+Math.sin(t*.23)*.16+v.pitch+v.ty*.15;
  v.art.rotation.z=Math.sin(t*.17)*.1;
  v.art.position.y=Math.sin(t*.7)*.11;
  v.art.children.forEach((o,i)=>{
    if(o.userData.ring!==undefined){o.rotation.x=.4+i*.17+Math.sin(t*.35+i)*.28;o.rotation.y=i*.2+t*.07;}
    if(o.userData.petal!==undefined){o.rotation.x=Math.PI/2+Math.sin(t*.5+i*.4)*.25;}
    if(o.userData.satellite)o.position.y+=Math.sin(t+i)*.001;
  });
  v.renderer.render(v.scene,v.camera);v.frames++;v.el.dataset.frames=v.frames;
}
function loop(now) {
  frame=0;
  if(state.stopped()||document.hidden){last=0;return;}
  if(now-lastDraw<1000/30){frame=requestAnimationFrame(loop);return;}
  lastDraw=now;
  const dt=last?Math.min((now-last)/1000,.06):0;last=now;elapsed+=dt;
  let active=false;views.forEach(v=>{if(v.visible){draw(v);active=true;}});
  if(active)frame=requestAnimationFrame(loop);else last=0;
}
function wake(){if(!state.stopped()&&!document.hidden&&!frame)frame=requestAnimationFrame(loop);}
window.addEventListener('vesper-motion',()=>{if(state.stopped()){cancelAnimationFrame(frame);frame=0;last=0;}else wake();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;last=0;}else wake();});
document.querySelectorAll('[data-scene]').forEach(el=>createView(el,+el.dataset.scene,el.id==='hero-art'));
wake();
