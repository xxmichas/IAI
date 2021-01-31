import React from 'react'
import styles from './Carousel.module.css'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Tippmann from '../../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/Tippmann.png'

const Carousel = (props) => {
    SwiperCore.use([Navigation]);

    let cards = [
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>,
                <div className={styles.card}><img src={Tippmann} alt="Tippmann"></img></div>
            ]

    return (
        <div>
            <div className={styles.slideArrowArea}>
                <div className={`${styles.slideArrow} ${styles.upsideDown}`} id="prevSlide"></div>
            </div>
            <div className={styles.carousel}>
                <Swiper spaceBetween={10} slidesPerView={6}  navigation={{nextEl: "#nextSlide", prevEl: "#prevSlide"}}
                    preventInteractionOnTransition direction="vertical">
                    {cards.map((el, i) => (<SwiperSlide key={i}>{el}</SwiperSlide>))}
                </Swiper>
            </div>
            <div className={styles.slideArrowArea}>
                <div className={styles.slideArrow} id="nextSlide"></div>
            </div>
        </div>
    )
}

export default Carousel
