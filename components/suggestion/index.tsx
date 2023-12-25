"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./suggestion.module.scss"

const Suggestion = () => {
  return (
    <Swiper
      spaceBetween={18}
      slidesPerView={1}
      modules={[Pagination]}
      className={styles.swiper}
      pagination={{ clickable: true }}
      speed={1000}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }}>
      <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <span className={styles.card__desc}>Təkliflər</span>
            <h4 className={styles.card__title}>İkiqat zəmanət ilə münasib al!</h4>
            <Link href="/" className={styles.card__btn}>Ətraflı</Link>
          </div>
          <Image
            src="/png/Phone 1.png"
            width={207}
            height={226}
            className={styles.card__img}
            alt="suggestion" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <span className={styles.card__desc}>Təkliflər</span>
            <h4 className={styles.card__title}>İkiqat zəmanət ilə münasib al!</h4>
            <Link href="/" className={styles.card__btn}>Ətraflı</Link>
          </div>
          <Image
            src="/png/baku_only_sizinadam 1.png"
            width={146}
            height={223}
            className={styles.card__img}
            alt="suggestion" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <span className={styles.card__desc}>Təkliflər</span>
            <h4 className={styles.card__title}>İkiqat zəmanət ilə münasib al!</h4>
            <Link href="/" className={styles.card__btn}>Ətraflı</Link>
          </div>
          <Image
            src="/png/Headphones 1.png"
            width={185}
            height={220}
            className={styles.card__img}
            alt="suggestion" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Suggestion