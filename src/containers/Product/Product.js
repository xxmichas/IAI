import React from 'react'
import styles from './Product.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Tippmann from '../../assets/products/Tippmann.png'

const Product = () => {
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
        <div className={styles.Product}>
            <div className={styles.carousel}>
                <Swiper spaceBetween={10} slidesPerView={6}  preventInteractionOnTransition direction="vertical">
                    {cards.map((el, i) => (<SwiperSlide key={i}>{el}</SwiperSlide>))}
                </Swiper>
            </div>
        </div>
    )
}

export default Product
