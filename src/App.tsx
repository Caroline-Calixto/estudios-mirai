import { Outlet } from 'react-router-dom'
import './App.css'
import { MenuComponent } from './components/Menu'
import { FooterComponent } from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <MenuComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}