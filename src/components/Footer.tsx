import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid #e5e7eb', padding:'16px 0', background:'#fafafa'}}>
      <div style={{width:'min(1100px, 92%)', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:14, color:'#6b7280', flexWrap:'wrap', gap:8}}>
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
