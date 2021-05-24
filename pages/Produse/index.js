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

    return {
        props: {
            products
        }
    }
}



const Produse = (props) => {

    const allProducts = props.products
    const [filter, setFilter] = useState('mocanu')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')
    const [move, setMove] = useState(allProducts[0].id.toString())

    const [img, setImg] = useState(allProducts[0])

    let tempImg = allProducts[0]

    useEffect(() => {
        changeMic()
    }, [def])


    const change = (e) => {
        // const alin = allProducts.filter(item => { return item.id && item.id === e.id })[0]
        setImg(e)
        // tempImg = e
        // console.log(e)
        // setMove(e)
        // let a = document.getElementById('s1')
        // a.style.transform = 'translate(100px)'

        // document.getElementById("s2").scrollIntoView()
    }

    const goback = () => {
        // let a = document.getElementById('s1')
        // a.style.left = '0'
        // document.getElementById("s1").scrollIntoView()
    }

    const changeMic =(e) => {
        // console.log(e)
        setDef(e)
        if (e === 'mic'){
            return allProducts.sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) || -1)
        }
        if (e === 'mare'){
            return allProducts.sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) || -1)
        }
        if (def === 'atoz') {
            return allProducts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() || -1)
        }
        if (def === 'ztoa') {
            return allProducts.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() || -1)
        }
    }


    return (
        <div className={styles.container} id='top'>
            <Head>
                <title>Produse</title>
            </Head>

            <section className={styles.s1} id='s1'>
                <Image src={img.media.source} width={960} height={540} />
                <div className={styles.containerSt}>
                    <div className={styles.sidebar}>
                        <Sidebar
                            changeCat={cat => setFilter(cat)}
                            brandAll={word => setBrand(word)}
                            changePrice={word => changeMic(word)}
                            products={allProducts}
                        />
                    </div>

                    <div className={styles.productList}>
                        {/* {allProducts.map(prd => (<MiniCard produs={prd} />)} */}
                        {allProducts.map(prd => <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />)}
                        {/* {changeMe(allProducts).map(prd => <MiniCard key={prd.id} produs={prd} change={()=>setImg(prd)} />)} */}

                        {/* {search !== '' ? searchItems().map(prd =>
                    <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />
                ) : []} */}

                        {/* <DetailsPop produse={allProducts} id='pop' propId={move} /> */}
                    </div>
                </div>
            </section>

            <section className={styles.s2} id='s2'>
                <div className={styles.containerDr}>
                    <button onClick={() => goback()}>Go to Produse</button>
                    <h4>{img.name}</h4>
                    <Image src={img.media.source} width={960} height={540} />
                </div>
            </section>



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