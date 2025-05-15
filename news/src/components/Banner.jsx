import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
const dummyData = [
  {
    title:'코스닥, 733.23 하락 마감… 0.79%↓',
    company : '국민일보'
  },
  {
    title:'김문수 "범죄자가 검사·법관 특검·탄핵…자기를 반대하는 사람 씨를 말려"',
    company : '디지털타임스',
  },
  {
    title:'코스닥, 733.23 하락 마감… 0.79%↓',
    company : '국민일보'
  },
  {
    title:'김문수 "범죄자가 검사·법관 특검·탄핵…자기를 반대하는 사람 씨를 말려"',
    company : '디지털타임스',
  }
]
const Banner = () => {
  return (
    <Swiper
      className='box__banner-wrap'
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay:2500,
        disableOnInteraction:false
      }}
      direction='vertical'
      loop={true}
    >
      {dummyData.map((item, idx) => {
        return(
          <SwiperSlide key={idx} className='box__banner-item'>
            <a href="#" className='link__banner'>
              <span className='text__title'>{item.title}</span>
              <span className='text__company'>{item.company}</span>
            </a>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default Banner;