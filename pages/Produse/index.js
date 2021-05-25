import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';
import Image from 'next/image'
import { commerce } from '../../lib/commerce'
// import { useRouter } from 'next/router'





export async function getStaticProps() {
    const { data: products } = await commerce.products.list()

    const sortedNames1 = []
    for (let i in products) {
        if (sortedNames1.includes(products[i].name)) {
            continue
        } else { sortedNames1.push(products[i].name) }
    }
    const sortedNames = sortedNames1.sort((a, b) => a > b && 1 || -1)

    return {
        props: {
            products, sortedNames
        }
    }
}



const Produse = ({ products, sortedNames, onAddToCart }) => {

    // const location = useRouter()

    const [filter, setFilter] = useState('mocanu')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')
    // const [move, setMove] = useState(allProducts[0].id.toString())
    const [img, setImg] = useState(products[0])
    const [imgpos, setImgpos] = useState(0)
    const [showCart, setShowCart] = useState(false)

    const changeBrand = () => {
        if (brand === 'marcaAll') {
            return products
        }
        const testFilter = products.filter(m => { return m.name && m.name.includes(brand) })
        return testFilter


    }

    const changePriceName = (e) => {
        setDef(e)
        if (e === 'mic') {
            return products.sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'mare') {
            return products.sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'atoz') {
            return products.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() && 1 || -1)
        }
        if (e === 'ztoa') {
            return products.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() && 1 || -1)
        }
    }

    const changeMe = (e) => {
        setImg(e)
        setImgpos(window.pageYOffset)

        let b = document.getElementById('s2')
        b.style.display = 'flex'
        // b.style.opacity = 1
        let c = document.getElementById('s1')
        c.style.display = 'none'
        // c.style.opacity = 0
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    }

    const goback = (e) => {
        let b = document.getElementById('s1')
        b.style.display = 'flex'
        // b.style.opacity = 1
        let c = document.getElementById('s2')
        c.style.display = 'none'
        // c.style.opacity = 0
        window.scrollTo({
            top: imgpos,
            left: 0,
            behavior: 'auto'
        })
    }

    return (
        <div className={styles.container} id='top'>
            <Head>
                <title>Produse</title>
            </Head>

            <div className={styles.containerImg} id='containerImg'>
                <div className={styles.carousel} id='carousel'>
                    <div className={styles.slider} id='slider'>
                        <section className={styles.s1} id='s1'>
                            <div className={styles.containerSt}>
                                <div className={styles.sidebar}>
                                    <Sidebar
                                        changeCat={cat => setFilter(cat)}
                                        brandAll={word => setBrand(word)}
                                        changePriceName={word => changePriceName(word)}
                                        sortedNames={sortedNames} />
                                </div>

                                <div className={styles.productList}>
                                    {changeBrand(products).map(prd => <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={cat => changeMe(cat)} />)}
                                </div>
                            </div>
                        </section>

                        <section className={styles.s2} id='s2'>
                            <div className={styles.containerDr}>
                                <button className={styles.backBtn} onClick={() => goback()}>&#60;</button>
                                <div className={styles.imageDiv}>
                                    <Image src={img.media.source} width={1920} height={1080} />
                                </div>
                                <div className={styles.rightSide}>
                                    <h4>{img.name}</h4>
                                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: img.description }}></div>
                                    <h4>Pret: {img.price.raw} <sub>ron</sub></h4>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Produse;
