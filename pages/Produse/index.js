import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import Head from 'next/head'

const Produse = (props) => {
    const { allProducts } = props
    const [filter, setFilter] = useState('allCats')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('')

    let localProd = allProducts

    const filterGlasses = () => {
        if (filter === 'allCats') {
            checkSort()
            // localProd = allProducts
            return allProducts
        }
        checkSort()
        return localProd.filter(m => { return m.clasa && m.clasa.includes(filter) })
    }

    const checkSort = () => {
        console.log(search)
        if (def === "mic") {
            localProd = localProd.sort((a, b) => a.price > b.price && 1 || -1)
        }
        if (def === 'mare') {
            localProd = localProd.sort((a, b) => a.price < b.price && 1 || -1)
        }
        if (def === 'atoz') {
            localProd = localProd.sort((a, b) => a.name > b.name && 1 || -1)
        }
        if (def === 'ztoa') {
            localProd = localProd.sort((a, b) => a.name < b.name && 1 || -1)
        }
        if (filter === 'marcaAll') {
            localProd = localProd.filter(m => { return m.clasa && m.clasa === 'rame' })
        }
        if (filter !== 'marcaAll') {
            localProd = localProd.filter(m => { return m.clasa && m.clasa.includes(filter) })
        }
        if (search === '') {
            localProd = localProd
        }
        if (search) {
            localProd = localProd.filter(m => {
                return m.name && m.name.toLowerCase().includes(search)
            })
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Produse</title>
            </Head>
            <div className={styles.sidebar}>
                <Sidebar
                    changeCat={cat => setFilter(cat)}
                    brandAll={word => setBrand(word)}
                    changePrice={word => setDef(word)}
                    searchResult={word => setSearch(word)}
                // changeType={word => setType(word)}
                />
            </div>
            <div className={styles.productList}>
                {filterGlasses(localProd).map(prd =>
                    <MiniCard produs={prd} />
                )}
            </div>
        </div>
    );
}


Produse.getInitialProps = async () => {
    const products = await getProduse()
    const allProducts = products.map(data => ({
        id: data.id,
        clasa: data.clasa,
        url: data.url,
        name: data.name,
        material: data.material,
        price: data.price,
        width: data.width,
        height: data.height,
        code: data.code,
        culoare: data.culoare
    }))

    return { allProducts }
}


export default Produse;
