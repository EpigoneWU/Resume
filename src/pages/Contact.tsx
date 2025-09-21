import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section style={{display:'grid', gap:16}}>
      <h2 style={{fontSize:24, fontWeight:800}}>Contact</h2>
      <p>Feel free to reach out for collaboration, opportunities, or a quick coffee chat.</p>
      <ContactForm />
      <p style={{color:'#6b7280'}}>Or email me directly: <a href="mailto:you@example.com">you@example.com</a></p>
    </section>
  )
}
