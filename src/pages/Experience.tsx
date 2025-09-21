import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section style={{display:'grid', gap:16}}>
      <h2 style={{fontSize:24, fontWeight:800}}>Experience</h2>
      <ul style={{display:'grid', gap:12, padding:0, listStyle:'none'}}>
        {profile.experiences.map(exp => (
          <li key={exp.role} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
            <div style={{fontWeight:700}}>{exp.role}</div>
            <div style={{color:'#6b7280'}}>{exp.org} · {exp.period}</div>
            <ul style={{margin:'8px 0 0 18px'}}>
              {exp.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
