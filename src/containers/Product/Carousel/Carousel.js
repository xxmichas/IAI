import React from 'react'
import styles from './Carousel.module.css'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Carousel = (props) => {
    SwiperCore.use([Navigation]);

    return (
        <div>
            <div className={styles.slideArrowArea}>
                <div className={`${styles.slideArrow} ${styles.upsideDown}`} id="prevSlide"></div>
            </div>
            <div className={styles.carousel}>
                <Swiper spaceBetween={10} slidesPerView={6}  navigation={{nextEl: "#nextSlide", prevEl: "#prevSlide"}}
                    preventInteractionOnTransition direction="vertical">
                    {props.cards.map((el, i) => (<SwiperSlide key={i}>{el}</SwiperSlide>))}
                </Swiper>
            </div>
            <div className={styles.slideArrowArea}>
                <div className={styles.slideArrow} id="nextSlide"></div>
            </div>
        </div>
    )
}

export default Carousel
