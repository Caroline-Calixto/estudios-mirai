import './App.css'
import { HeaderSection } from './components/Sections/Header'
import { MenuComponent } from './components/Menu'
import { AboutSection } from './components/Sections/About'
import { OurServicesSection } from './components/Sections/OurServices'
import { OurStorySection } from './components/Sections/OurStory'
import PortfolioSection from './components/Sections/Portfolio'
import TestimonialsSection from './components/Sections/Testimonials'

export default function App() {

  return (
    <>
      <MenuComponent />
      <HeaderSection />
      <AboutSection />
      <OurServicesSection />
      <OurStorySection />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  )
}