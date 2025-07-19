import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import OurClients from './pages/OurClients'
import OurPartners from './pages/OurPartners'
import Career from './pages/Career'
import Gallery from './pages/Gallery'
import BookNow from './pages/BookNow'
import AnimatedGallery from './pages/AnimatedGallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
    <Header />
    <Home />
    <AboutUs />
    <Services />
    <Blogs />
    <OurClients />
    <OurPartners />
    <Career /> 
    <AnimatedGallery />
    <BookNow />
    <Footer />
    </>
  )
}

export default App
