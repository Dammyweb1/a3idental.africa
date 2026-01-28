export default function About() {
  return (
    <>
      <section className="hero-banner">
        <img className="hero-banner-img" src="https://img.freepik.com/free-photo/dentist-office-doctor-practice-concept-professional-african-american-doctor-dentistry-medical-pointing-teeth-xray_627829-14128.jpg?t=st=1768213196~exp=1768216796~hmac=760791f3930d7c9cb908e6a77d95e94b5cdc6345897778b142c094705896c112" alt="Our dental team at work" />
        <div className="hero-banner-shade" />
        <div className="hero-banner-text">
          <h1>About Us</h1>
          <p>At A3idental Prosthetic Restoration Ltd, we combine artistry and biomedical precision to restore smiles for life.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid2">
          <div className="stack">
            <div className="panel about-panel">
              <div className="eyebrow">About A3idental Prosthetic Restoration Ltd</div>
              <h2>Restoring Smiles with Precision</h2>
              <p className="muted my-5">We are a specialist‑led practice dedicated to prosthetic and restorative dentistry—crowns, bridges, implant prostheses, and facial prosthetics engineered for comfort, strength, and natural aesthetics.</p>
              <div className="bullets">
                <div className="b"><span className="abt-dot">✓</span><span>Evidence‑based treatment plans tailored to your goals</span></div>
                <div className="b"><span className="abt-dot">✓</span><span>Digital diagnostics: intraoral scanning, CBCT, CAD/CAM</span></div>
                <div className="b"><span className="abt-dot">✓</span><span>Biomimetic principles that conserve healthy tooth structure</span></div>
                <div className="b"><span className="abt-dot">✓</span><span>Elite lab partnerships for lifelike, durable restorations</span></div>
              </div>
            </div>
          </div>
          <div className="media rounded">
            <img src="https://images.pexels.com/photos/8460373/pexels-photo-8460373.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop" alt="Our dental team" />
          </div>
        </div>
      </section>
      <section className="section borderless">
        <div className="container">
          <div className="Mission-heading">
            <h2>A3idental Mission & Goals</h2>
          </div>
          <div className="cards three">
            <div className="card">
              <div className="title text-center">Our Mission</div>
              <p className="desc text-center">To restore confidence and oral function through precision prosthetic and restorative dentistry, delivering lifelike results with compassionate, patient‑first care.</p>
            </div>
            <div className="card">
              <div className="title text-center">Our Vision</div>
              <p className="desc text-center">To be a regional leader in advanced prosthetic rehabilitation—blending science, digital innovation, and artistry to set new standards for smile restoration.</p>
            </div>
            <div className="card">
              <div className="title text-center">Our Goals</div>
              <p className="desc text-center">Continuous quality improvement, investment in modern diagnostics, and personalised treatment plans that prioritise longevity, comfort, and natural aesthetics.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
