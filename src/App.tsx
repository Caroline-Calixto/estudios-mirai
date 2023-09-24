import './App.css'
import { AboutSection } from './components/About'
import { ContactSection } from './components/Contact'
import { DesignSection } from './components/Design'
import { FooterSection } from './components/Footer'
import { HeaderSection } from './components/Header'
import { MenuComponent } from './components/Menu'
import { WebsiteSection } from './components/Website'

export default function App() {

  return (
    <>
      <MenuComponent />
      <HeaderSection />
      <AboutSection />
      <DesignSection />
      <WebsiteSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}