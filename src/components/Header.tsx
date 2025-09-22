// src/components/Header.tsx
import { useCallback } from 'react';
import { profile } from '../data/profile';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

// 輕量版：用 hash + CSS :target 高亮（不依賴 router / observer）
function useJump() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  }, []);
}

export default function Header() {
  const onJump = useJump();

  const linkStyle: React.CSSProperties = { padding: '8px 10px', borderRadius: 8, textDecoration: 'none', color:'#111827' };

  return (
    <header
      style={{
        position:'fixed', top:0, left:0, right:0, zIndex:50,
        height:'var(--header-h)', borderBottom:'1px solid #e5e7eb',
        background:'rgba(255,255,255,.8)', backdropFilter:'saturate(180%) blur(8px)'
      }}
    >
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'min(1100px, 92%)', margin:'0 auto', height:'100%'}}>
        <a href="#home" onClick={(e)=>onJump(e,'home')} style={{fontWeight:800, fontSize:18}}>{profile.name}</a>
        <nav style={{display:'flex', gap:6}}>
          {SECTIONS.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e)=>onJump(e, s.id)}
              style={linkStyle}
              // 以網址 hash 簡單判斷高亮；需要更精準可換 IntersectionObserver
              className={typeof window !== 'undefined' && window.location.hash === `#${s.id}` ? 'active-nav' : ''}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
