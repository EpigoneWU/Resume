import type { Project } from './../types'

export default function ProjectCard({ title, tech, description, link, image }: Project) {
  return (
    <article style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16, display:'grid', gap:10}}>
      {image && <img src={image} alt={title} style={{width:'100%', height:160, objectFit:'cover', borderRadius:8}} />}
      <div>
        <h3 style={{fontWeight:700}}>{title}</h3>
        <p style={{color:'#6b7280', margin:'6px 0'}}>{description}</p>
        <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
          {tech.map(t => (
            <span key={t} style={{fontSize:12, padding:'4px 8px', borderRadius:999, background:'#f3f4f6', border:'1px solid #e5e7eb'}}>{t}</span>
          ))}
        </div>
      </div>
      {link && <a href={link} target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'#2563eb', fontWeight:600}}>View Project →</a>}
    </article>
  )
}
