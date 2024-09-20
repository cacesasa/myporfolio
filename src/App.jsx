import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/contact'
import Footer from './footer/Footer'
import Headroom from 'react-headroom'

function App() {
 

  return (
    <>
      <div className="App">
        <BrowserRouter>          
          <Headroom>
            <NavBar/>
          </Headroom>
          <Hero/>
          <Projects/>
          <Skills/>
          <Contact/>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
