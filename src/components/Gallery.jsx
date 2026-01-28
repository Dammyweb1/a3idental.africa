import { useMemo, useState } from 'react'

const IMAGES = [
  { src: 'https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Cosmetic smile', tag: 'Cosmetic' },
  { src: 'https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Implant planning', tag: 'Implants' },
  { src: 'https://images.unsplash.com/photo-1606811971618-448db68e0a54?q=80&w=1600&auto=format&fit=crop', alt: 'Clinical procedure', tag: 'Clinical' },
  { src: 'https://images.unsplash.com/photo-1581594693700-95d7fcd36086?q=80&w=1600&auto=format&fit=crop', alt: 'Aligners result', tag: 'Aligners' },
  { src: 'https://images.unsplash.com/photo-1588771930296-88c2cb03f88c?q=80&w=1600&auto=format&fit=crop', alt: 'Prosthetics lab', tag: 'Implants' },
  { src: 'https://images.unsplash.com/photo-1551601651-823d7c4b4c2a?q=80&w=1600&auto=format&fit=crop', alt: 'Whitening', tag: 'Cosmetic' },
  { src: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Comfort care', tag: 'Clinical' },
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop', alt: 'Digital implant guide', tag: 'Implants' },
]

const FILTERS = ['All', 'Cosmetic', 'Implants', 'Aligners', 'Clinical']

export default function Gallery(){
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState({ open:false, index:0 })

  const items = useMemo(() => filter==='All' ? IMAGES : IMAGES.filter(i=>i.tag===filter), [filter])

  const open = (idx) => setLightbox({ open:true, index: idx })
  const close = () => setLightbox({ open:false, index:0 })
  const prev = (e) => { e?.stopPropagation?.(); setLightbox(s => ({ ...s, index: (s.index - 1 + items.length) % items.length })) }
  const next = (e) => { e?.stopPropagation?.(); setLightbox(s => ({ ...s, index: (s.index + 1) % items.length })) }

  return (
    <section className="section dim">
      <div className="container">
        <div className="section-head">
          <h2>Gallery</h2>
          <div className="filters">
            {FILTERS.map(f => (
              <button key={f} className={`chip ${filter===f ? 'active' : ''}`} onClick={()=> setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="gallery-grid">
          {items.map((img, idx) => (
            <figure key={idx} className="gallery-card" onClick={()=> open(idx)}>
              <img loading="lazy" src={img.src} alt={img.alt} />
              <figcaption className="overlay">
                <span className="badge">{img.tag}</span>
                <div className="title">{img.alt}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div className="lightbox" onClick={close}>
          <button className="lb-btn left" onClick={prev} aria-label="Previous">‹</button>
          <img src={items[lightbox.index].src} alt={items[lightbox.index].alt} />
          <div className="lb-caption">{items[lightbox.index].alt} • {items[lightbox.index].tag}</div>
          <button className="lb-btn right" onClick={next} aria-label="Next">›</button>
          <button className="lb-close" onClick={close} aria-label="Close">✕</button>
        </div>
      )}
    </section>
  )
}
