import React,{Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from './native-theme.jsx';
import {AnimatedSubscribeButton} from '../originals/magic-ui/registry/magicui/animated-subscribe-button.tsx';
import '../originals/magic-ui/styles/globals.css';
import './inline.css';
import InteractiveAnimatedGrid from './interactive-grid.jsx';
const sources=import.meta.glob('../originals/magic-ui/registry/example/*.tsx');
function Subscribe(){return <AnimatedSubscribeButton><span>Subscribe</span><span>Subscribed</span></AnimatedSubscribeButton>}
class Guard extends React.Component{
  constructor(p){super(p);this.state={error:null}}
  static getDerivedStateFromError(error){return {error:String(error)}}
  render(){return this.state.error?<p role="status">Этот пример требует дополнительной среды.</p>:this.props.children}
}
export function mount(container,name){
  const load=sources[`../originals/magic-ui/registry/example/${name}.tsx`];
  const Demo=name==='animated-grid-pattern-demo'?InteractiveAnimatedGrid:name==='legacy-subscribe-demo'?Subscribe:load?React.lazy(load):null;
  const root=createRoot(container);
  root.render(<ThemeProvider><Guard><main className="native-demo"><Suspense fallback={<span className="native-loading">Загрузка…</span>}>{Demo?<Demo/>:<p>Пример недоступен</p>}</Suspense></main></Guard></ThemeProvider>);
  return ()=>root.unmount();
}
