"use client"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import styles from '@/styles/components/Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderItems } from '@/backend/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const Slider: React.FC = () => {
  const handleSlideChange = () => {
    console.log('Slide change');
  };

  const handleSwiper = (swiper: any) => {
    console.log(swiper);
  };

  return (
    <div className={styles.mainSwiper}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {sliderItems.map((item: SliderItem) => (
          <SwiperSlide key={item.id}>
            <div className={styles.Slide}>
              <div className={styles.ImgSlideContainer}>
                <img className={styles.ImgSlide} alt={item.title} title={item.title} src={item.img} />
              </div>
              <div className={styles.InfoSlideContainer}>
                <h2 className={styles.titleSlide}>{item.title}</h2>
                <p className={styles.descriptionSlide}>{item.desc}</p>
                <button className={styles.shopNow}>SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
