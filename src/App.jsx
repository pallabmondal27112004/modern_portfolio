import { useState } from 'react'
import './App.css'
import Nevbar from './components/nevbar/Nevbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import SkillsSection from './components/skill/Skills'
import Contect from './components/contect/Contect'
import Experience from './components/experience/Experience'
import Achievements from './components/achievements/Achievements'
import Testimonials from './components/testimonials/Testimonials'
import ScrollProgress from './components/scrollProgress/ScrollProgress'
import Loader from './components/loader/Loader'
import BackToTop from './components/backToTop/BackToTop'
import ProfessionalInfo from './components/professionalInfo/ProfessionalInfo'

import React from "react";
import Footer from './components/footer/Footer'
import BlogGrid from './components/blog/Bolg'
function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Refs no longer needed since we use scroll to ID functionality

  const handleLoadingComplete = () => {
    console.log('Loading completed, setting isLoading to false');
    setIsLoading(false);
  };

  console.log('App render - isLoading:', isLoading);

  //   return (
  //     <div>
  //       {/* Navbar */}
  //       <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-50 flex gap-4">
  //         <button onClick={() => scrollToSection(homeRef)}>Home</button>
  //         <button onClick={() => scrollToSection(aboutRef)}>About</button>
  //         <button onClick={() => scrollToSection(contactRef)}>Contact</button>
  //       </nav>

  //       {/* Sections */}
  //       <div ref={homeRef} className="min-h-screen bg-gray-100 flex items-center justify-center">
  //         <h1 className="text-4xl">🏠 Home Section</h1>
  //       </div>

  //       <div ref={aboutRef} className="min-h-screen bg-blue-100 flex items-center justify-center">
  //         <h1 className="text-4xl">📖 About Section</h1>
  //       </div>

  //       <div ref={contactRef} className="min-h-screen bg-green-100 flex items-center justify-center">
  //         <h1 className="text-4xl">📞 Contact Section</h1>
  //       </div>
  //     </div>
  //   );
  // };

  // export default App;


  return (
    <div>
      {isLoading ? (
        <Loader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div style={{ minHeight: '100vh', background: 'white' }}>
          <ScrollProgress />
          <BackToTop />
          <Nevbar />
          <Home />
          <About />
          <Experience />
          <Portfolio />
          <SkillsSection />
          <Achievements />
          <Testimonials />
          <BlogGrid />
          <ProfessionalInfo />
          <Contect />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
