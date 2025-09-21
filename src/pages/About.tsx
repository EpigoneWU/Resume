export default function About() {
  return (
    <section style={{display:'grid', gap:12}}>
      <h2 style={{fontSize:24, fontWeight:800}}>About Me</h2>
      <p>
        I’m a Master’s student at QUT with a background in Healthcare IT, EHR/EMR, and Telehealth.
        I enjoy building accessible, data-driven products with React & TypeScript.
      </p>
      <div>
        <h3 style={{fontWeight:700}}>Skills</h3>
        <ul style={{margin:'8px 0 0 18px'}}>
          <li>Frontend: React, TypeScript, Vite</li>
          <li>Backend: Django / Node basics</li>
          <li>Data/UX: Usability testing, Accessibility, Data viz</li>
        </ul>
      </div>
      <div>
        <h3 style={{fontWeight:700}}>Education</h3>
        <p>Queensland University of Technology — M.IT</p>
      </div>
    </section>
  )
}
