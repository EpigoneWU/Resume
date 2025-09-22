import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer
      style={{
        position:'fixed', bottom:0, left:0, right:0, zIndex:50,
        height:'var(--footer-h)', borderTop:'1px solid #e5e7eb',
        background:'rgba(255,255,255,.85)', backdropFilter:'saturate(180%) blur(8px)',
      }}
    >
      <div
        style={{
          width:'min(1100px, 92%)', margin:'0 auto',
          height:'100%', display:'flex', alignItems:'center',
          justifyContent:'space-between', fontSize:14, color:'#6b7280'
        }}
      >
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div style={{display:'flex', gap:12}}>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="/resume.pdf" download>PDF</a>
        </div>
      </div>
    </footer>
  );
}
