import { Link } from "react-router-dom"

export default function Blog({ title = 'From Our Blog' }){
  const posts = [
    {
      title: 'Professional Teeth Whitening: What to Expect',
      img: 'https://images.pexels.com/photos/6812562/pexels-photo-6812562.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop',
      excerpt: 'In‑clinic vs take‑home whitening, safety, sensitivity, and results timeline.',
      href: 'Expects',
      tag: 'Whitening',
      date: 'Nov 2025'
    },
    {
      title: 'Dental Implants: Your Step‑by‑Step Journey',
      img: 'https://images.pexels.com/photos/5355694/pexels-photo-5355694.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop',
      excerpt: 'From consultation to final crown—healing, timelines, and care tips.',
      href: 'dental-implants-guide',
      tag: 'Implants',
      date: 'Nov 2025'
    },
    {
      title: 'Orthodontics: Braces vs Clear Aligners',
      img: 'https://images.pexels.com/photos/4269685/pexels-photo-4269685.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop',
      excerpt: 'Which option suits your goals, lifestyle, and budget? A dentist explains.',
      href: '/blog/braces-vs-clear-aligners',
      tag: 'Orthodontics',
      date: 'Oct 2025'
    }
  ]

  return (
    <section className="section dim blog">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          <a className="link" href="/blog">View all</a>
        </div>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <article key={i} className="post-card">
              <div className="media">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="tag">{p.tag}</span>
              </div>
              <div className="content">
                <div className="meta-row">
                  <div className="date">{p.date}</div>
                </div>
                <h3 className="title">{p.title}</h3>
                <p className="excerpt muted">{p.excerpt}</p>
                <Link to={p.href}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
