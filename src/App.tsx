import './App.css'
import { FooterComponent } from './components/Footer'
import { MenuComponent } from './components/Menu'
import { AboutSection } from './components/Sections/About'
import CallToAction from './components/Sections/CallToAction'
import HeaderSection from './components/Sections/Header'
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
      <CallToAction />
      <FooterComponent />
    </>
  )
}