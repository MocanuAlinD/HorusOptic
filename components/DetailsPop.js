import React, { useState, useEffect } from 'react';
import styles from '../styles/DetailsPop.module.css'
import Image from 'next/image'

const DetailsPop = (props) => {
    if (!props.propId) return null

    const jobId = props.propId
    let page = jobId ? props.produse.filter(x => x && x.id === jobId)[0] : ''
    let ln = page.assets ? page.assets.length - 1 : []
    var sliderIndex = 0

    useEffect(() => {
        let b = document.getElementById('slider')
        b.style.transform = 'translate(0)'
    }, [page])

    const closeMenu = (e) => {
        let a = document.getElementById('pop')
        let b = document.getElementById('slider')
        b.style.transform = 'translate(0)'
        a.style.left = e
        sliderIndex = 0
        ln = 0
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
                            {page.assets.map((alin) =>
                                <section key={alin.id}>
                                    <Image priority='true' layout='responsive' src={alin.url} alt='Glasses' width={alin.image_dimensions.width} height={alin.image_dimensions.height} />
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
                <p dangerouslySetInnerHTML={{__html: page.description}}></p>
                <h5>Pret: {page.price.raw} <sub>ron</sub></h5>
            </div>
        </div>
    );
}

export default DetailsPop;
