import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import avilia from '../assets/avilia.jpg';
import leadway from '../assets/leadway.jpg';
import nem from '../assets/nem.jpg';
import reliance from '../assets/reliance.jpg';
import clearline from '../assets/clearline.jpg';
import metro from '../assets/metro.jpg';

const LogoCarousel = () => {
  const logos = [
    { id: 1, src: avilia },
    { id: 2, src: leadway },
    { id: 3, src: nem },
    { id: 4, src: reliance },
    { id: 5, src: clearline },
    { id: 6, src: metro },
    // ... add others
  ];

  return (
    <div className="py-10 bg-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2} // Mobile default
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Desktop settings
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="logo-swiper"
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id} className="flex justify-center items-center slide-container">
            <img 
              src={logo.src} 
              alt={`Brand ${logo.id}`} 
              className="h-30 w-auto transition-all duration-300 object-contain "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;