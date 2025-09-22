import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Header />
      <main style={{ paddingTop: 'var(--header-h)' , paddingBottom: 'var(--footer-h)' }}>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </Layout>
  )
}
