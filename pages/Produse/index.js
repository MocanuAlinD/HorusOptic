import React, { useState } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'

const Produse = (props) => {
    const { allProducts } = props
    const [filter, setFilter] = useState('allCats')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')

    let consu = allProducts

    const filterGlasses = allProducts => {
        if (filter === 'allCats'){
            return consu
        }
        if (filter === 'rame') {
            return consu.filter(m => { return m.clasa && m.clasa.includes(filter) })
        }
        if (filter === 'accesorii') {
            return consu.filter(m => { return m.clasa && m.clasa.includes(filter) })
        }
        if (filter === 'lentile') {
            return consu.filter(m => { return m.clasa && m.clasa.includes(filter) })
        }
    }

    const checkDef =() => {
        console.log('checkDef')
    }

    const arata =() => {
        console.log('arata')
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar
                    changeCat={cat => setFilter(cat)}
                    changePrice={word => setDef(word)}
                    searchResult={word => setSearch(word)}
                />
            </div>
            <div className={styles.productList}>
                {filter === 'allCats' ? filterGlasses(consu).map(prd =>
                    <MiniCard produs={prd} />
                ): []}

                {filter === 'rame' ? filterGlasses(consu).map(prd =>
                    <MiniCard produs={prd} />
                ) : []}

                {filter === 'accesorii' ? filterGlasses(consu).map(prd =>
                    <MiniCard produs={prd} />
                ) : []}

                {filter === 'lentile' ? filterGlasses(consu).map(prd =>
                    <MiniCard produs={prd} />
                ) : []}
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
