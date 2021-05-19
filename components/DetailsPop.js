import React, { useState, useEffect } from 'react';
import styles from '../styles/DetailsPop.module.css'
import Image from 'next/image'

const DetailsPop = (props) => {
    const jobId = props.propId
    let page = props.produse.filter(x => x && x.id === jobId)[0]
    const ln = page.carousel ? page.carousel.length - 1 : []
    var sliderIndex = 0

    useEffect(()=>{
        let b = document.getElementById('slider')
        b.style.transform = 'translate(0)'
    },[page])

    const closeMenu = (e) => {
        let a = document.getElementById('pop')
        let b = document.getElementById('slider')
        b.style.transform = 'translate(0)'
        a.style.left = e
        sliderIndex = 0
    }

    const setImagePlus = () => {
        let a = document.getElementById('slider')
        sliderIndex = (sliderIndex < ln) ? sliderIndex + 1 : ln
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    const setImageMinus = () => {
        let a = document.getElementById('slider')
        sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    return (
        <div className={styles.container} id='pop'>
            <button className={styles.backBtn} onClick={() => closeMenu('-150%')}>X</button>
            <div className={styles.left}>
                <div className={styles.containerImg} id='containerImg'>
                    <div className={styles.carousel} id='carousel'>
                        <div className={styles.slider} id='slider'>
                            {page.carousel.map((alin, index) =>
                                <section key={index}>
                                    <Image priority='true' layout='responsive' src={alin} alt='Glasses' width={page.width} height={page.height} />
                                </section>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsDiv}>
                    <button className={styles.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                    <button className={styles.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
                </div>
            </div>
            <div className={styles.right}>
                <h4>{page.name}</h4>
                <h5>{page.id}</h5>
                <p>Material: <em>{page.material}</em></p>
                <p>{page.culoare ? 'Culoare: ' + page.culoare : []}</p>
                <p>Cod: <em>{page.code}</em></p>
                <h5>Pret: {page.price} <sub>ron</sub></h5>
            </div>
        </div>
    );
}

// DetailsPop.getInitialProps = async () => {
//     const products = await getProduse()
//     const allProducts = products.map(data => ({
//         id: data.id,
//         clasa: data.clasa,
//         url: data.url,
//         carousel: data.carousel,
//         name: data.name,
//         material: data.material,
//         price: data.price,
//         width: data.width,
//         height: data.height,
//         code: data.code,
//         culoare: data.culoare
//     }))


//     return {
//         allProducts
//     }
// }

export default DetailsPop;
