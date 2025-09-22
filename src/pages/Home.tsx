import Hero from "../components/Hero";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <section
      id="home"
      className="section-anchor w-screen min-h-dvh flex items-center bg-gradient-to-b from-sand-100 to-sand-50"
    >
      <div className="container-wrap">
        <Hero />
        <section style={{marginTop:24, textAlign:'center', color:'#374151', whiteSpace:'pre-line'}}>
          {profile.summary}
        </section>
      </div>
    </section>
  );
}
