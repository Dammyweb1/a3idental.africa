import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Modal } from 'flowbite-react'
import logoUrl from '../assets/logo-a3idental.svg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const [bookSuccess, setBookSuccess] = useState(false)
  const [service, setService] = useState('Orthodontics')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [botField, setBotField] = useState('')
  useEffect(() => {
    if (open || bookOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [open, bookOpen])
  useEffect(()=>{
    if (!bookOpen) return
    const onKey = (e)=>{ if (e.key === 'Escape') setBookOpen(false) }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[bookOpen])
  return (
    <header className="navbar">
      {/* Top header bar */}
      <div className="topbar">
        <div className="container">
          <div className="tb-inner">
            <div className="tb-left">
              <span className="tb-icon">📍</span>
              <span className="tb-text">12 Smile Avenue, Lagos, NG</span>
            </div>
            <div className="tb-right">
              <div className="flex gap-3">
            <a href="#" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all text-white">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all text-white">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all text-white">
              <FaTwitter size={14} />
            </a>
          </div>
              <a className="tb-phone" href="tel:+2347066278395">📞 +2347066278395</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="brand">
            <span className="logo"><img src={logoUrl} alt="A3idental"/></span>
            <span className="brand-name">A3idental</span>
          </Link>
          <nav className="links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <Link to="/contact" className="btn primary book-btn-btn text-" aria-label="Book an appointment" onClick={(e)=>{e.preventDefault(); setBookOpen(true)}}>Book Appointment</Link>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>☰</button>
        </div>
        <div className={`offcanvas ${open ? 'open' : ''}`} aria-hidden={!open}>
          <div className="offcanvas-overlay" onClick={() => setOpen(false)} />
          <aside className="offcanvas-panel" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="offcanvas-head">
              <span className="brand-inline"><span className="logo small"><img src={logoUrl} alt="A3idental"/></span><span className="brand-name">A3idental</span></span>
              <button className="menu-btn" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
            </div>
            <nav className="offcanvas-links">
              <NavLink onClick={() => setOpen(false)} to="/" end>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services">Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/blog">Blog</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
              <Link onClick={(e)=>{e.preventDefault(); setOpen(false); setBookOpen(true)}} to="/contact" className="btn primary book-btn" aria-label="Book an appointment">Book Now</Link>
            </nav>
          </aside>
        </div>
        {/* Booking Modal (Flowbite) */}
        <Modal show={bookOpen} onClose={()=>{setBookOpen(false); if(bookSuccess) setBookSuccess(false)}} dismissible size="xl" popup className="z-[200]">
          <div className="bg-gradient-to-b from-sky-950/90 to-slate-950/90 bg-appointment border-white/10 rounded-t-2xl px-6 py-4">
            <strong className="text-white bg-clip-text bg-gradient-to-r from-sky-200 to-white text-xl md:text-2xl drop-shadow">Book an appointment</strong>
          </div>
          <div className="bg-gradient-to-b from-sky-950/90 to-slate-950/90 rounded-b-2xl p-6 md:p-8">
            {bookSuccess ? (
              <div className="stack">
                <div className="panel" style={{textAlign:'center'}}>
                  <div style={{fontSize:42}}>✅</div>
                  <h3 style={{margin:'6px 0'}}>Request received</h3>
                  <p className="muted">Our team will contact you shortly to confirm your appointment.</p>
                </div>
                <div className="row" style={{justifyContent:'center'}}>
                  <button className="btn primary relative overflow-hidden ring-1 ring-sky-300/40 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 hover:shadow-2xl transition-transform hover:-translate-y-px" onClick={()=>{setBookOpen(false); setBookSuccess(false)}}>Close</button>
                </div>
              </div>
            ) : (
            <form onSubmit={(e)=>{
              e.preventDefault();
              if (loading) return;
              const nextErrors = {};
              if (!name.trim()) nextErrors.name = 'Enter your name';
              const phoneOk = /^[+0-9()\-\s]{7,}$/.test(phone.trim());
              if (!phoneOk) nextErrors.phone = 'Enter a valid phone';
              if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email';
              setErrors(nextErrors);
              if (Object.keys(nextErrors).length) return;
              if (botField) return;
              setLoading(true);
              setTimeout(()=>{ setLoading(false); setBookSuccess(true); }, 900);
            }} className="stack form">
  
              <div className="grid2">
                <div>
                  <label className="mb-1 inline-block">Name</label>
                  <input className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300/50" type="text" placeholder="Jane Doe" value={name} onChange={(e)=>setName(e.target.value)} aria-invalid={!!errors.name} autoFocus required />
                  {errors.name && <div className="small" style={{color:'#fecaca'}}>{errors.name}</div>}
                </div>
                <div>
                  <label className="mb-1 inline-block">Phone</label>
                  <input className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300/50" type="tel" placeholder="+234 800 000 0000" value={phone} onChange={(e)=>setPhone(e.target.value)} aria-invalid={!!errors.phone} required pattern="[+0-9()\-\s]{7,}" />
                  {errors.phone && <div className="small" style={{color:'#fecaca'}}>{errors.phone}</div>}
                </div>
              </div>
              <div className="grid2">
                <div>
                  <label className="mb-1 inline-block">Email</label>
                  <input className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300/50" type="email" placeholder="jane@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} aria-invalid={!!errors.email} />
                  {errors.email && <div className="small" style={{color:'#fecaca'}}>{errors.email}</div>}
                </div>
                <div>
                  <label className="mb-1 inline-block">Preferred date</label>
                  <input className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300/50" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="mb-1 inline-block">Dental Services</label>
                <select className="w-full rounded-xl border border-white/20 bg-white/10 s-border focus:outline-none focus:ring-2 focus:ring-sky-300/50" value={service} onChange={(e)=>setService(e.target.value)}>
                  <option>Orthodontics</option>
                  <option>Teeth Whitening</option>
                  <option>Facial Prosthetics</option>
                  <option>Dental Implants</option>
                  <option>Crowns & Bridges</option>
                  <option>Orthopaedics</option>
                  <option>Neurology</option>
                </select>
              </div>
              <div>
                <label className="mb-1 inline-block">Notes</label>
                <textarea className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300/50" rows="4" placeholder="Tell us more about your request" />
              </div>
              <input type="text" value={botField} onChange={(e)=>setBotField(e.target.value)} tabIndex="-1" autoComplete="off" aria-hidden="true" style={{position:'absolute', left:'-10000px', top:'auto', width:1, height:1, overflow:'hidden'}} />
              <div className="row" style={{justifyContent:'flex-end'}}>
                  <button type="button" className="btn hover:brightness-110" onClick={()=>setBookOpen(false)} disabled={loading}>Cancel</button>
                  <button type="submit" className="btn primary book-btn relative overflow-hidden ring-1 ring-sky-300/40 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 hover:shadow-2xl transition-transform hover:-translate-y-px" disabled={loading}>{loading? 'Submitting…':'Request Booking'}</button>
              </div>
              <p className="muted small">We will contact you to confirm your appointment time.</p>
            </form>
            )}
          </div>
        </Modal>
      </div>
    </header>
  )
}
