import { profile } from "../data/profile";

export default function About() {
  const s = profile.skills;
  return (
    <section id="about" className="section-anchor w-screen bg-white">
      <div className="container-wrap section" style={{display:'grid', gap:16}}>
        <h2 style={{fontSize:24, fontWeight:800}}>About</h2>
        <div>
          <h3 style={{fontWeight:700}}>Education</h3>
          <ul style={{margin:'8px 0 0 18px'}}>
            {profile.education.map(e => (
              <li key={e.school}>
                <strong>{e.school}</strong> — {e.degree} ({e.period}){e.gpa ? ` · ${e.gpa}` : ""}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{fontWeight:700}}>Skills</h3>
          <ul style={{margin:'8px 0 0 18px'}}>
            <li><strong>Healthcare & Informatics:</strong> {s.healthcare.join(", ")}</li>
            <li><strong>Programming & Tools:</strong> {s.programming.join(", ")}</li>
            <li><strong>Data & Analytics:</strong> {s.data.join(", ")}</li>
            <li><strong>Soft Skills:</strong> {s.soft.join(", ")}</li>
            <li><strong>Languages:</strong> {s.languages.join(", ")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
