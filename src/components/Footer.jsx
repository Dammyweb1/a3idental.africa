import logoUrl from '../assets/logo-a3idental.svg'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="brand-inline"><span className="logo small"><img src={logoUrl} alt="A3idental"/></span><span className="brand-name">A3idental</span></div>
          <p className="muted my-6">We are a specialist‑led practice dedicated to prosthetic and restorative<br/> </p>
          {/* SOCIAL MEDIA ICONS ROW */}
          <div className="flex gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all text-white">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all text-white">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all text-white">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
        <div>
          <div className="title">Our Services</div>
          <div>
            <ul className="stack">
              <li>
                <Link to="/">Teeth Whitening</Link>
              </li>
              <li>
                <Link to="/">Orthodontics</Link>
              </li>
              <li>
                <Link to="/">Dental Implants</Link>
              </li>
              <li>
                <Link to="/">Orthopaedics</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="title">Information</div>
            <div>
              <ul className="stack">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
        </div>
        <div>
          <div className="title">Newsletter</div>
          <p className="muted">Get smile tips and updates. No spam, unsubscribe anytime.</p>
          <form className="newsletter" onSubmit={(e)=>e.preventDefault()}>
            <input className="f-input" type="email" placeholder="Enter your email" required />
            <button className="f-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="copyright">© {new Date().getFullYear()} A3idental. All rights reserved.</div>
      </div>
    </footer>
  )
}
