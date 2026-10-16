import React,{Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'next-themes';
import FluxLines from './flux-lines/FluxLines.jsx';
import {AnimatedSubscribeButton} from '../originals/magic-ui/registry/magicui/animated-subscribe-button.tsx';
function LegacySubscribeDemo(){return <AnimatedSubscribeButton><span>Subscribe</span><span>Subscribed</span></AnimatedSubscribeButton>}
import '../originals/magic-ui/styles/globals.css';
import './viewer.css';
const sources=import.meta.glob('../originals/magic-ui/registry/example/*.tsx');
const name=new URLSearchParams(location.search).get('demo')||'marquee-demo';
const load=sources[`../originals/magic-ui/registry/example/${name}.tsx`];
const Demo=name==='reactbits-flux-lines'?FluxLines:name==='legacy-subscribe-demo'?LegacySubscribeDemo:(load?React.lazy(load):null);
class Guard extends React.Component{constructor(p){super(p);this.state={error:null}}static getDerivedStateFromError(error){return{error:String(error)}}render(){return this.state.error?<p role="alert" style={{padding:24}}>Пример требует дополнительной среды: {this.state.error}</p>:this.props.children}}
createRoot(document.getElementById('root')).render(<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}><Guard><main className="demo-container"><Suspense fallback={<p>Загрузка оригинального примера…</p>}>{Demo?<Demo/>:<p>Такого примера нет</p>}</Suspense></main></Guard></ThemeProvider>);
