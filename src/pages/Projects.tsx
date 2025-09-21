import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";
import { profile } from "../data/profile";

const projects: Project[] = [
  {
    title: "Exploration App",
    tech: ["React (web)", "Leaflet", "IndexedDB"],
    description: "Web-based data visualization platform; Agile/Scrum with client features.",
    link: profile.github
  },
  {
    title: "Emotional Wellbeing App",
    tech: ["UX Research", "Accessibility", "Usability Testing"],
    description: "Improved accessibility and emotional engagement for international students.",
    link: profile.github
  },
  {
    title: "Fitness Tracking App",
    tech: ["Cross-platform", "Privacy & Security"],
    description: "Exercise, meditation, history tracking; healthcare privacy principles.",
    link: profile.github
  }
];

export default function Projects() {
  return (
    <section style={{display:'grid', gap:16}}>
      <h2 style={{fontSize:24, fontWeight:800}}>Projects</h2>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
