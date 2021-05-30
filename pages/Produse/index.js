import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';
import Image from 'next/image'
import { commerce } from '../../lib/commerce'
import cls from '../../styles/dinamicPage.module.css'


export async function getServerSideProps(context) {
    const { data: products } = await commerce.products.list()

    const { data: categories } = await commerce.categories.list()

    const sortedNames1 = []
    for (let i in products.filter(x => x.categories[0].slug === 'rame')) {
        if (sortedNames1.includes(products[i].name)) {
            continue
        } else { sortedNames1.push(products[i].name) }
    }
    const sortedNames = sortedNames1.sort((a, b) => a > b && 1 || -1)


    return {
        props: {
            products, sortedNames, categories
        }
    }
}



const Produse = ({ categories, products, sortedNames, onAddToCart }) => {


    const [filter, setFilter] = useState('rame')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')
    const [img, setImg] = useState(products[0])
    const [imgpos, setImgpos] = useState(0)

    const changeBrand = () => {
        if (brand === 'marcaAll') {
            return products.filter(x => x.categories[0].slug === filter)
        }
        if (brand !== 'marcaAll') {
            return products.filter(m => { return m.name && m.name.includes(brand) })
        }
        // const testFilter = products.filter(m => { return m.name && m.name.includes(brand) })
        // return testFilter
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
        let c = document.getElementById('s1')
        c.style.display = 'none'
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    }



    const goback = (e) => {
        let b = document.getElementById('s1')
        b.style.display = 'flex'
        let c = document.getElementById('s2')
        c.style.display = 'none'
        window.scrollTo({
            top: imgpos,
            left: 0,
            behavior: 'auto'
        })
    }

    const searchItems = () => {
        const a = products.filter(x => {
            return x.name && x.name.toLowerCase().includes(search) ||
                x.description && x.description.toLowerCase().includes(search)
        })
        return a
    }


    // Slider Images
    const jobId = img.id
    let ln = img.assets ? img.assets.length - 1 : []
    var sliderIndex = 0

    useEffect(() => {
        let b = document.getElementById('slider1')
        b.style.transform = 'translate(0)'
    }, [img])


    const setImagePlus = () => {
        let a = document.getElementById('slider1')
        sliderIndex = (sliderIndex < ln) ? sliderIndex + 1 : ln
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    const setImageMinus = () => {
        let a = document.getElementById('slider1')
        sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    return (
        <div className={styles.container} id='top'>
            <Head>
                <title>Produse</title>
            </Head>

            <div className={styles.containerImg}>
                <div className={styles.carousel}>
                    <div className={styles.slider} id='slider'>
                        <section className={styles.s1} id='s1'>
                            <div className={styles.containerSt}>
                                <div className={styles.sidebar}>
                                    <Sidebar
                                        changeCat={cat => (setFilter(cat), setBrand('marcaAll'))}
                                        brandAll={word => setBrand(word)}
                                        changePriceName={word => changePriceName(word)}
                                        sortedNames={sortedNames}
                                        searchResult={word => setSearch(word)}
                                    />
                                </div>

                                <div className={styles.productList}>
                                    {search === '' && changeBrand(products).map(prd =>
                                        <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={cat => changeMe(cat)} />)}

                                    {search !== '' ? searchItems().map(prd =>
                                        <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={cat => changeMe(cat)} />) : []}
                                </div>
                            </div>
                        </section>

                        <section className={styles.s2} id='s2'>
                            <div className={styles.containerDr}>
                                <button className={styles.backBtn} onClick={() => goback()}>&#60;</button>

                                <div className={cls.alin1}>
                                    <div className={cls.alin2}>
                                        <div className={cls.alin3}>
                                            <div className={cls.alin4} id='slider1'>
                                                <div className={cls.alin5}>
                                                    {img.assets.map((alin) =>
                                                        <section key={alin.id}>
                                                            <Image src={alin.url} width={alin.image_dimensions.width} height={alin.image_dimensions.height} />
                                                        </section>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cls.buttonsDiv}>
                                            <button className={cls.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                                            <button className={cls.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.rightSide}>
                                    <h4>{img.name}</h4>
                                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: img.description }}></div>
                                    <div className={styles.link}><button onClick={() => onAddToCart(img.id, 1)} disabled={true && img.inventory.available < 99}>Adauga in cos</button></div>
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

// Produse.getInitialProps = async () => {
//     const { data: products } = await commerce.products.list()

//     return { 
//         props: {
//             products
//         } 
//     }
// }





export default Produse;
