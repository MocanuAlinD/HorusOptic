import React, { useState } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'

const Produse = (props) => {
    const { allProducts } = props
    const [filter, setFilter] = useState('allCats')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('')

    let localProd = allProducts

    const filterGlasses = (e) => {
        if (filter === 'allCats'){
            return checkFilter(localProd)
        }
        localProd = localProd.filter(m => { return m.clasa && m.clasa.includes(filter) })
        return checkFilter(localProd)
    }

    const checkFilter =(c) => {
        if (def === 'mic') {
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
        if (search === '') {
            return localProd
        }
        if (search !== 'mic' || search !== 'mare' || search !== 'atoz' || search !== 'ztoa') {
            return localProd.filter(m => {
                return m.name && m.name.toLowerCase().includes(search)
            })
        }
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
