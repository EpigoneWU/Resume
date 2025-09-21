export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid #e5e7eb', padding:'16px 0', background:'#fafafa'}}>
      <div style={{width:'min(1100px, 92%)', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:14, color:'#6b7280'}}>
        <span>© {new Date().getFullYear()} Epigone Wu</span>
        <div style={{display:'flex', gap:12}}>
          <a href="https://github.com/epigonewu" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf" download>Download PDF</a>
        </div>
      </div>
    </footer>
  )
}
