import React, { useState, useEffect } from 'react';
import styles from '../styles/DetailsPop.module.css'
import Image from 'next/image'

const DetailsPop = (props) => {
    const page = props.produse
    const [count, setCount] = useState(0)
    const ln = page.carousel ? page.carousel.length - 1 : []

    const closeMenu = (e) => {
        let a = document.getElementById('pop')
        a.style.left = e
    }

    useEffect(() => {
        setCount(0),
        console.log(page.id)
    }, [props.prodId])


    const setImagePlus = () => {
        if (count === ln) {
            setCount(ln)
        }
        if (count < ln) {
            setCount(count + 1)
        }
    }

    const setImageMinus = () => {
        if (count === 0) {
            setCount(0)
        }
        if (count > 0) {
            setCount(count - 1)
        }
    }

    // useEffect(() => [count])

    return (
        <div className={styles.container} id='pop'>
            <button className={styles.backBtn} onClick={() => closeMenu('-150%')}>X</button>
            <div className={styles.left} style={{ width: '100%' }}>
                <Image as='image' src={page.carousel[count]} width={page.width/2} height={page.height/2} id='img' />
                <div className={styles.buttonsDiv}>
                    <button className={styles.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                    <h4 className={styles.countText}>{count + 1}/{ln + 1}</h4>
                    <button className={styles.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
                </div>
            </div>
            <div className={styles.right}>
                <h4>{page.name}</h4>
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
//         name: data.name,
//         material: data.material,
//         price: data.price,
//         width: data.width,
//         height: data.height,
//         code: data.code,
//         culoare: data.culoare
//     }))

//     return {
//         produse
//     }
// }

export default DetailsPop;
