import Hero from "../components/Hero";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <>
      <Hero />
      <section style={{marginTop:24, textAlign:'center', color:'#374151', whiteSpace:'pre-line'}}>
        {profile.summary}
      </section>
    </>
  );
}
