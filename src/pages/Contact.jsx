export default function Contact() {
  return (
    <>
      <section className="hero-banner">
        <img className="hero-banner-img" src="https://img.freepik.com/free-photo/dentist-s-office-interior-with-modern-chair-special-dentisd-equipment-interior-stomatology-clinic_482257-11998.jpg?t=st=1768223898~exp=1768227498~hmac=e78c968ec04a18ea6ca4ea4a205878b9a0d1543062eb691e51f1366eb6092101" alt="Contact A3idental - dental care" />
        <div className="hero-banner-shade" />
        <div className="hero-banner-text">
          <h1>Contact Us</h1>
          <p>Book an appointment or ask our team a question—we’re here to help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <form className="panel form" onSubmit={e => e.preventDefault()}>
            <div>
              <label>Full name</label>
              <input type="text" placeholder="Jane Doe" />
            </div>
            <div className="grid2">
              <div>
                <label>Email</label>
                <input type="email" placeholder="jane@example.com" />
              </div>
              <div>
                <label>Phone</label>
                <input type="tel" placeholder="+1 234 567 890" />
              </div>
            </div>
            <div>
              <label>How can we help?</label>
              <textarea rows="6" placeholder="I would like to book a cleaning..." />
            </div>
            <button className="btn primary book-btn mt-6 ml-none" type="submit">Send Message</button>
            <p className="muted small">This is a demo form. Hook it up to your backend or Forms provider to receive messages.</p>
          </form>
          <div className="stack">
            <div className="panel">
              <h3>Visit us</h3>
              <p className="muted">123 Dental Ave, Suite 200, Smile City, SC 20250</p>
              <div className="map">
                <iframe title="map" src="https://www.google.com/maps?q=New%20York&output=embed" loading="lazy" />
              </div>
            </div>
            <div className="panel grid2">
              <div>
                <div className="label muted">Call</div>
                <a href="tel:+1234567890" className="link">+1 (234) 567‑890</a>
              </div>
              <div>
                <div className="label muted">Email</div>
                <a href="mailto:hello@a3idental.com" className="link">info@a3idental.com</a>
              </div>
              <div>
                <div className="label muted">Hours</div>
                <div>Mon–Fri 8:00–18:00</div>
              </div>
              <div>
                <div className="label muted">Social</div>
                <div className="row">
                  <a href="#" className="chip">X</a>
                  <a href="#" className="chip">In</a>
                  <a href="#" className="chip">F</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
