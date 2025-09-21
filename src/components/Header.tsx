import { Link, NavLink } from 'react-router-dom'

const linkStyle: React.CSSProperties = { padding: '8px 10px', borderRadius: 8 }
const activeStyle: React.CSSProperties = { background: 'rgba(0,0,0,0.08)' }

export default function Header() {
  return (
    <header style={{borderBottom:'1px solid #e5e7eb', background:'#fff'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'min(1100px, 92%)', margin:'0 auto', padding:'12px 0'}}>
        <Link to="/" style={{fontWeight:800, fontSize:18, letterSpacing:0.3}}>Epigone Wu</Link>
        <nav style={{display:'flex', gap:6}}>
          {[
            {to:'/', label:'Home'},
            {to:'/about', label:'About'},
            {to:'/projects', label:'Projects'},
            {to:'/experience', label:'Experience'},
            {to:'/contact', label:'Contact'},
          ].map(item => (
            <NavLink key={item.to} to={item.to} end style={({isActive}) => ({
              ...linkStyle,
              color:'#111827',
              textDecoration:'none',
              ...(isActive ? activeStyle : {})
            })}>{item.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
