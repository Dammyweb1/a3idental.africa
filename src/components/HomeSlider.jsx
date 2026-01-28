// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HomeSlider.css';

const HomeSlider = () => {
  const slides = [
    { id: 1, title: "Summer Collection", paragraph: "Our Dental services gives the best", img: "https://img.freepik.com/free-photo/positive-female-dentist-curing-teeth-male-patient_651396-1719.jpg?t=st=1767891559~exp=1767895159~hmac=a6530afaead6aa3e856cd18026c4c9e47c3d3cde83b2a7250e524c18620580a8" },
    { id: 2, title: "New Arrivals", paragraph: "leaching good services", img: "https://img.freepik.com/free-photo/view-from-side-female-doctor-process-doing-filling_651396-1703.jpg?t=st=1767891875~exp=1767895475~hmac=9fa53de79c140fce838087a91a26d8123f03fa0b20324b8deefe5940152a77e0" },
    { id: 3, title: "Flash Sale", paragraph: "leaching good services", img: "https://img.freepik.com/free-photo/dentist-holding-dental-plastic-model-with-braces_273609-13103.jpg?t=st=1767892241~exp=1767895841~hmac=d235970259e7ea7171c89a81ea7c426b7f895f47610bda5c7c4768987efdaa22" },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade" // Smooth fade transition
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-inner">
              <img src={slide.img} alt={slide.title} />
              <div className="image-overlay"></div>
              <div className="slide-content-overlay">
                <div className="custom-container md:px-10">
                  <div className="slide-text">
                      <h1>{slide.title}</h1>
                      <p>{slide.paragraph}</p>
                      <button className="cta-btn slider-btn mt-5">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;