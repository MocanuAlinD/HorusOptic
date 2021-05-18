import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import DetailsPop from '../../components/DetailsPop'
import Head from 'next/head'



const Produse = (props) => {
    const { allProducts } = props
    const [filter, setFilter] = useState('rame')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('')
    const [move, setMove] = useState('1')

    useEffect(() => {
        filterGlasses()
    }, [filter, brand, def, search])


    const filterGlasses = () => {
        if (filter === 'rame') {
            checkSort()
            if (brand === 'marcaAll') {
                return allProducts.filter(m => { return m.clasa && m.clasa.includes('rame') })
            }
            if (brand) {
                return allProducts.filter(m => { return m.name && m.name.includes(brand) })
            }

        }
        if (filter === 'lentile') {
            checkSort()
            return allProducts.filter(m => { return m.clasa && m.clasa.includes('lentile') })
        }
        if (filter === 'accesorii') {
            checkSort()
            return allProducts.filter(m => { return m.clasa && m.clasa.includes('accesorii') })
        }
    }




    const checkSort = () => {
        if (def === "mic") {
            return allProducts.sort((a, b) => a.price > b.price && 1 || -1)
        }
        if (def === 'mare') {
            return allProducts.sort((a, b) => a.price < b.price && 1 || -1)
        }
        if (def === 'atoz') {
            return allProducts.sort((a, b) => a.name > b.name && 1 || -1)
        }
        if (def === 'ztoa') {
            return allProducts.sort((a, b) => a.name < b.name && 1 || -1)
        }
    }

    const searchItems = () => {
        const a = allProducts.filter(x => {
            return x.name && x.name.toLowerCase().includes(search) ||
                x.code && x.code.includes(search) ||
                x.material && x.material.toLowerCase().includes(search) ||
                x.culoare && x.culoare.toLowerCase().includes(search)
        })
        return a
    }

    const change = (e) => {
        setMove(e)
        let a = document.getElementById('pop')
        a.style.left = '0'
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
                    searchResult={word => setSearch(word)}
                />
            </div>
            <div className={styles.productList}>
                {search === '' ? filterGlasses(allProducts).map(prd =>
                    <MiniCard produs={prd} change={cat => change(cat)} />
                ) : []}

                {search !== '' ? searchItems().map(prd =>
                    <MiniCard produs={prd} change={cat => change(cat)} />
                ) : []}

                <DetailsPop produse={allProducts[move - 1]} id='pop' prodId={move} />
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
        carousel: data.carousel,
        name: data.name,
        material: data.material,
        price: data.price,
        width: data.width,
        height: data.height,
        code: data.code,
        culoare: data.culoare,
    }))

    return { allProducts }
}


export default Produse;
