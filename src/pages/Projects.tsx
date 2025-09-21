import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types'

const projects: Project[] = [
  {
    title: 'Exploration App',
    tech: ['React (web/mobile)', 'Leaflet', 'IndexedDB'],
    description: 'Visualize historical mining data with offline capability and tenure overlays.',
    link: 'https://github.com/your-org/exploration',
    image: '/images/exploration.jpg'
  },
  {
    title: 'EmotionBridge',
    tech: ['Django', 'HTMX', 'Tailwind'],
    description: 'Well-being journaling app with accessibility and multilingual UI.',
    link: 'https://github.com/your-org/emotionbridge'
  },
  {
    title: 'Resume Website',
    tech: ['Vite', 'React', 'gh-pages'],
    description: 'This online resume with GitHub Pages deployment.',
  }
]

export default function Projects() {
  return (
    <section style={{display:'grid', gap:16}}>
      <h2 style={{fontSize:24, fontWeight:800}}>Projects</h2>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
