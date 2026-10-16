import React,{useRef,useState} from 'react';
import {AnimatedGridPattern} from '../originals/magic-ui/registry/magicui/animated-grid-pattern';

// Catalog adaptation: original automatic squares plus pointer and click feedback.
export default function InteractiveAnimatedGrid(){
  const ref=useRef(null);
  const [cell,setCell]=useState(null);
  const [pulse,setPulse]=useState(null);
  const locate=event=>{
    const r=ref.current.getBoundingClientRect();
    return {x:Math.floor((event.clientX-r.left)/40)*40,y:Math.floor((event.clientY-r.top)/40)*40};
  };
  return <div ref={ref} className="interactive-animated-grid" tabIndex={0} role="img" aria-label="Сетка: двигай курсор и нажимай на ячейки"
    onPointerMove={event=>setCell(locate(event))}
    onPointerLeave={()=>setCell(null)}
    onPointerDown={event=>{const next=locate(event);setCell(next);setPulse({...next,id:performance.now()});}}
    onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();const r=ref.current.getBoundingClientRect();const next={x:Math.floor(r.width/80)*40,y:Math.floor(r.height/80)*40};setCell(next);setPulse({...next,id:performance.now()});}}}>
    <AnimatedGridPattern width={40} height={40} numSquares={20} maxOpacity={0.18} duration={3}/>
    <svg className="interactive-grid-feedback" width="100%" height="100%" aria-hidden="true">
      {cell&&<rect data-hover-cell="true" x={cell.x+1} y={cell.y+1} width={38} height={38} rx={3} fill="#e75331" fillOpacity=".55" stroke="#ffb59f"/>}
      {pulse&&<rect data-click-cell="true" key={pulse.id} className="grid-click-pulse" x={pulse.x+1} y={pulse.y+1} width={38} height={38} rx={3} fill="none" stroke="#ffd8cd" strokeWidth="2"/>}
    </svg>
  </div>;
}
