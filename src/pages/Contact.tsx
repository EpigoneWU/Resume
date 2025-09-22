import ContactForm from "../components/ContactForm";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section-anchor w-screen bg-sand-50">
      <div className="container-wrap section" style={{display:'grid', gap:16}}>
        <h2 style={{fontSize:24, fontWeight:800}}>Contact</h2>
        <ul style={{margin:'0 0 8px 18px'}}>
          <li><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><strong>Phone:</strong> {profile.phone}</li>
          <li><strong>Location:</strong> {profile.location}</li>
          <li><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>
        </ul>
        <ContactForm />
      </div>
    </section>
  );
}
