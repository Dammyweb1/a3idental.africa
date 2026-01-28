import Blog from '../components/Blog.jsx'

export default function BlogPage(){
  return (
    <>
      <section className="hero-banner">
        <img className="hero-banner-img" src="https://images.pexels.com/photos/5355694/pexels-photo-5355694.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop" alt="Blog banner - dental care" />
        <div className="hero-banner-shade" />
        <div className="hero-banner-text">
          <h1>Our Blog</h1>
          <p>Insights on implants, aligners, whitening, and restorative dentistry.</p>
        </div>
      </section>
      

      {/* Latest posts grid */}
      <section className="section">
        <div className="container">
          <Blog />
        </div>
      </section>

      
    </>
  )
}
