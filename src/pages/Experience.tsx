export default function Experience() {
  const items = [
    {
      role: 'Project Manager · Exploration App',
      org: 'OreFox (Industry Project)',
      time: '2025',
      bullets: [
        'Led a 5-person team; coordinated client communication and delivery.',
        'Shipped offline map & data viewer; improved load time by ~35%.',
      ]
    },
    {
      role: 'Research Assistant',
      org: 'QUT',
      time: '2024',
      bullets: [
        'Conducted user interviews & usability tests for a mental-health app.',
        'Synthesized insights into actionable design changes.',
      ]
    }
  ]

  return (
    <section style={{display:'grid', gap:16}}>
      <h2 style={{fontSize:24, fontWeight:800}}>Experience</h2>
      <ul style={{display:'grid', gap:12, padding:0, listStyle:'none'}}>
        {items.map(it => (
          <li key={it.role} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
            <div style={{fontWeight:700}}>{it.role}</div>
            <div style={{color:'#6b7280'}}>{it.org} · {it.time}</div>
            <ul style={{margin:'8px 0 0 18px'}}>
              {it.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
