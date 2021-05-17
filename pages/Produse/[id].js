import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { getProduse } from '../../actions'
import styles from '../../styles/dinamicPage.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Details = ({ allProducts }) => {
    const router = useRouter()
    const alin = router.query.id
    const page = allProducts[alin - 1]
    const [count, setCount] = useState(0)
    const ln = page.carousel.length - 1

    

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

    useEffect(() => [count])

    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => router.back()}>&#60;  Inapoi la produse</button>
            <div className={styles.left}>
                <Image src={page.carousel[count]} width={page.width} height={page.height} />
                <div className={styles.buttonsDiv}>
                    <button className={styles.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                    <h4 className={styles.countText}>{count + 1}/{ln + 1}</h4>
                    <button className={styles.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
                </div>
            </div>
            <div className={styles.right}>
                <h4>{page.name}</h4>
                <p>Material: <em>{page.material}</em></p>
                <p>{page.culoare ? 'Culoare: ' + page.culoare: []}</p>
                <p>Cod: <em>{page.code}</em></p>
                <h5>Pret: {page.price} <sub>ron</sub></h5>
            </div>
        </div>
    );
}


Details.getInitialProps = async () => {
    const products = await getProduse()
    const allProducts = products.map(data => ({
        id: data.id,
        clasa: data.clasa,
        url: data.url,
        carousel: data.carousel,
        name: data.name,
        material: data.material,
        price: data.price,
        width: data.width,
        height: data.height,
        code: data.code,
        culoare: data.culoare
    }))


    return {
        allProducts
    }
}

export default Details;
