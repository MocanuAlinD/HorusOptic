import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import DetailsPop from '../../components/DetailsPop'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';

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

    useEffect(() => {
        changeMe()
    }, [filter,brand,def])

    const changeMe = () => {
        if (brand==='marcaAll'){
            if (def === 'mic') {
                return allProducts.sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) || -1)
            }
            if (def === 'mare') {
                return allProducts.sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) || -1)
            }
            if (def === 'atoz') {
                return allProducts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() || -1)
            }
            if (def === 'ztoa') {
                return allProducts.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() || -1)
            }
        }

        if (brand !== 'marcaAll'){
            if (def === 'mic') {
                return allProducts.filter(m => { return m.name && m.name.includes(brand) }).sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) || -1)
            }
            if (def === 'mare') {
                return allProducts.filter(m => { return m.name && m.name.includes(brand) }).sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) || -1)
            }
            if (def === 'atoz') {
                return allProducts.filter(m => { return m.name && m.name.includes(brand) }).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() || -1)
            }
            if (def === 'ztoa') {
                return allProducts.filter(m => { return m.name && m.name.includes(brand) }).sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() || -1)
            }
        }
    }

   
    const change = (e) => {
        // setMove(e)
        // let a = document.getElementById('pop')
        // a.style.left = '0'
        return ('alin')
    }


    return (
        <div className={styles.container} id='top'>
            <Head>
                <title>Produse</title>
            </Head>

            <div className={styles.sidebar}>
                <Sidebar
                    changeCat={cat => setFilter(cat)}
                    brandAll={word => setBrand(word)}
                    changePrice={word => setDef(word)}
                    products={allProducts}
                // searchResult={word => setSearch(word)}
                />
            </div>

            <div className={styles.productList}>
                {/* {allProducts.map(prd => (<MiniCard produs={prd} />)} */}
                {changeMe(allProducts).map(prd => <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />)}

                {/* {search !== '' ? searchItems().map(prd =>
                    <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />
                ) : []} */}

                <DetailsPop produse={allProducts} id='pop' propId={move} />
            </div>

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
