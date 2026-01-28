import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsApp from './components/whatsapp';




export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div style={{ position: 'relative', zIndex: 9999 }}>
        <WhatsApp />
      </div>
    </div>
  )
}
