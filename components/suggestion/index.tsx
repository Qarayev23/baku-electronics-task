"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import styles from "./suggestion.module.scss"

const Suggestion = () => {
  return (
    <Swiper
      spaceBetween={18}
      slidesPerView={2}
      className={styles.swiper}
    >
      <SwiperSlide>
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
      <SwiperSlide>
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
      <SwiperSlide>
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