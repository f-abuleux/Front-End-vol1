import Navbar from './components/navbar'
// import './App.css'
import Content from './components/content'
import HomeSection from './components/home'
import Aboutme from './components/aboutme'
import Contact from './components/contact'
import "./style.css"
import { motion,useScroll,useSpring } from "framer-motion";


function App() {
  return (
    <div className='mainnavbar'>
      <Navbar />
      <div className='container-content'>
        <HomeSection />
        <Content />
        <Aboutme />
        <Contact />
      </div>
    </div>
  )
}

export default App
