import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import DetailsPop from '../../components/DetailsPop'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';
import Image from 'next/image'

import { commerce } from '../../lib/commerce'

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



const Produse = (props) => {

    const allProducts = props.products
    const sortedNames = props.sortedNames
    const [filter, setFilter] = useState('mocanu')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')
    const [move, setMove] = useState(allProducts[0].id.toString())
    const [img, setImg] = useState(allProducts[0])
    const [imgpos, setImgpos] = useState(0)

    const changeBrand = () => {
        if (brand === 'marcaAll') {
            return allProducts
        }
        const testFilter = allProducts.filter(m => { return m.name && m.name.includes(brand) })
        return testFilter


    }

    const changePriceName = (e) => {
        setDef(e)
        if (e === 'mic') {
            return allProducts.sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'mare') {
            return allProducts.sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'atoz') {
            return allProducts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() && 1 || -1)
        }
        if (e === 'ztoa') {
            return allProducts.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() && 1 || -1)
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

            {/* <div className={cls.containerImg} id='containerImg'>
                <div className={cls.carousel} id='carousel'>
                    <div className={cls.slider} id='slider'>
                        {page.assets.map((alin) =>
                            <section key={alin.id}>
                                <Image priority='true' layout='responsive' src={alin.url} alt='Glasses' width={alin.image_dimensions.width} height={alin.image_dimensions.height} />
                            </section>
                        )}
                    </div>
                </div>
            </div> */}


            <div className={styles.containerImg} id='containerImg'>
                <div className={styles.carousel} id='carousel'>
                    <div className={styles.slider} id='slider'>
                        <section className={styles.s1} id='s1'>
                            <div className={styles.containerSt}>
                                <div className={styles.sidebar}>
                                    <Sidebar className={styles.siderbar1}
                                        changeCat={cat => setFilter(cat)}
                                        brandAll={word => setBrand(word)}
                                        changePriceName={word => changePriceName(word)}
                                        sortedNames={sortedNames} />
                                </div>

                                <div className={styles.productList}>
                                    {changeBrand(allProducts).map(prd => <MiniCard key={prd.id} produs={prd} change={cat => changeMe(cat)} />)}
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


            {/* <section className={styles.s1} id='s1'>
                <div className={styles.containerSt}>
                    <div className={styles.sidebar}>
                        <Sidebar
                            changeCat={cat => setFilter(cat)}
                            brandAll={word => setBrand(word)}
                            changePriceName={word => changePriceName(word)}
                            sortedNames={sortedNames}
                        />
                    </div>

                    <div className={styles.productList}>
                        {changeBrand(allProducts).map(prd => <MiniCard key={prd.id} produs={prd} change={cat => changeMe(cat)} />)}
                    </div>
                </div>
            </section>

            <section className={styles.s2} id='s2'>
                <div className={styles.containerDr}>
                    <button onClick={()=> goback()}>Go to Produse</button>
                    <h4>{img.name}</h4>
                    <Image src={img.media.source} width={960} height={540} />
                </div>
            </section> */}



        </div>
    );
}

// Produse.getInitialProps = async () => {
//     const { data } = await commerce.products.list()

//     console.log(data[0])

//     return { 
//         props: data }
// }


export default Produse;



// return (
//     <div className={styles.container} id='top'>
//         <Head>
//             <title>Produse</title>
//         </Head>

//         <div className={styles.sidebar}>
//             <Sidebar
//                 changeCat={cat => setFilter(cat)}
//                 brandAll={word => setBrand(word)}
//                 changePrice={word => setDef(word)}
//                 products={allProducts}
//             />
//         </div>

//         <div className={styles.productList}>
//             {changeMe(allProducts).map(prd => <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />)}


//             <DetailsPop produse={allProducts} id='pop' propId={move} />
//         </div>

//     </div>
// )



// const changeMe = (e) => {
//     setImg(e)
//     let b = document.getElementById('s2')
//     b.style.transform = 'translate(-100%)'
//     let c = document.getElementById('s1')
//     c.style.transform = 'translate(-100%)'
// }

// const goback = (e) => {
//     let b = document.getElementById('s1')
//     b.style.transform = 'translate(0)'
//     let c = document.getElementById('s2')
//     c.style.transform = 'translate(0)'
// }