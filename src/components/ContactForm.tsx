import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const mailto = `mailto:you@example.com?subject=${encodeURIComponent('[Portfolio] ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`

  return (
    <form onSubmit={(e)=>{e.preventDefault(); window.location.href = mailto}} style={{display:'grid', gap:12, maxWidth:560}}>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required style={inputStyle}/>
      <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required style={inputStyle}/>
      <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} rows={6} required style={inputStyle}/>
      <button type="submit" style={{...buttonStyle, background:'#2563eb', color:'#fff'}}>Send Email</button>
    </form>
  )
}

const inputStyle: React.CSSProperties = { padding:'10px 12px', borderRadius:10, border:'1px solid #e5e7eb', outline:'none' }
const buttonStyle: React.CSSProperties = { padding:'10px 14px', borderRadius:10, border:'1px solid transparent', cursor:'pointer' }
