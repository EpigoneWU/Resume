import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section style={{textAlign:'center', padding:'28px 0 8px'}}>
      <img src="/profile.jpg" alt="Profile" style={{width:112, height:112, borderRadius:'9999px', objectFit:'cover', margin:'0 auto', boxShadow:'0 6px 24px rgba(0,0,0,.12)'}} />
      <h1 style={{marginTop:16, fontSize:28, fontWeight:800}}>{profile.name}</h1>
      <p style={{color:'#6b7280'}}>{profile.headline}</p>
      <div style={{marginTop:16, display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
        <a href="/resume.pdf" download style={{padding:'10px 14px', borderRadius:10, background:'#2563eb', color:'#fff', textDecoration:'none'}}>Download Resume (PDF)</a>
        <a href={profile.github} target="_blank" rel="noreferrer" style={{padding:'10px 14px', borderRadius:10, border:'1px solid #e5e7eb', textDecoration:'none', color:'#111827'}}>GitHub</a>
      </div>
    </section>
  );
}
