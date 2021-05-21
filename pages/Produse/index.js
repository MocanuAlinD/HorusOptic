import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import DetailsPop from '../../components/DetailsPop'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';



const Produse = (props) => {
    const { allProducts } = props
    const [filter, setFilter] = useState('rame')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('')
    const [move, setMove] = useState('DSC_0001')

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
                return allProducts.filter(m => { return m.brand && m.brand.includes(brand) })
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
        if (def === "--") {
            return allProducts
        }
        if (def === "mic") {
            return allProducts.sort((a, b) => parseInt(a.pret) > parseInt(b.pret) && 1 || -1)
        }
        if (def === 'mare') {
            return allProducts.sort((a, b) => parseInt(a.pret) < parseInt(b.pret) && 1 || -1)
        }
        if (def === 'atoz') {
            return allProducts.sort((a, b) => a.brand > b.brand && 1 || -1)
        }
        if (def === 'ztoa') {
            return allProducts.sort((a, b) => a.brand < b.brand && 1 || -1)
        }
    }

    const searchItems = () => {
        const a = allProducts.filter(x => {
            return x.brand && x.brand.toLowerCase().includes(search) ||
                x.cod && x.cod.toLowerCase().includes(search) ||
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
                    <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />
                ) : []}

                {search !== '' ? searchItems().map(prd =>
                    <MiniCard key={prd.id} produs={prd} change={cat => change(cat)} />
                ) : []}

                <DetailsPop produse={allProducts} id='pop' propId={move}/>
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
        brand: data.brand,
        stilRama: data.stilRama,
        pentru: data.pentru,
        pret: data.pret,
        material: data.material,
        culoare: data.culoare,
        cod: data.cod,
        tipRama: data.tipRama,
        latimeLentile: data.latimeLentile,
        punteNazala: data.punteNazala,
        lungimeBrat: data.lungimeBrat,
        width: data.width,
        height: data.height
    }))

    return { allProducts }
}


export default Produse;
