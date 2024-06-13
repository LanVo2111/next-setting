import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import styles from '../styles/home.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

export const Slider = () => {
  return (
    <section className='home-slider'>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={false}
      >
        <SwiperSlide className={styles['slide']}>
          <Image src={'/assets/banner-large-image1.png'} width={1200} height={800} alt='Summer glow' priority />
          <div className={styles.content}>
            <p className={styles['slide-title']}>Summer glow</p>
            <p className={styles.txt}>Tortor eget placerat arcu integer. Lectus fames egestas tincidunt aliquet vivamus nibh lorem nulla. This is Modern fashion ectus fames egestas tincidunt aliquet vivamus nibh lorem nulla.</p>
            <div className={styles['btn-shop']}>
              <Link href={'/prouduct'}>
                Shop Collection
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['slide']}>
          <Image src={'/assets/banner-large-image2.jpg'} width={1200} height={800} alt='Summer glow' priority />
          <div className={styles.content}>
            <p className={styles['slide-title']}>Summer glow</p>
            <p className={styles.txt}>Tortor eget placerat arcu integer. Lectus fames egestas tincidunt aliquet vivamus nibh lorem nulla. This is Modern fashion ectus fames egestas tincidunt aliquet vivamus nibh lorem nulla.</p>
            <div className={styles['btn-shop']}>
              <Link href={'/prouduct'}>
                Shop Collection
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles['slide']}>
          <Image src={'/assets/banner-large-image.png'} width={1200} height={800} alt='Summer glow' priority />
          <div className={styles.content}>
            <p className={styles['slide-title']}>Summer glow</p>
            <p className={styles.txt}>Tortor eget placerat arcu integer. Lectus fames egestas tincidunt aliquet vivamus nibh lorem nulla. This is Modern fashion ectus fames egestas tincidunt aliquet vivamus nibh lorem nulla.</p>
            <div className={styles['btn-shop']}>
              <Link href={'/prouduct'}>
                Shop Collection
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

