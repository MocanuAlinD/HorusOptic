import React, { useState } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'

const Produse = (props) => {
    const { allProducts } = props
    const [filter, setFilter] = useState('all')

    const filterGlasses = allProducts => {
        if (filter === 'all') {
            return allProducts
        }
        return allProducts.filter(m => {
            return m.name && m.name.includes(filter)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar
                    changeCat={word => setFilter(word)}
                />
            </div>
            <div className={styles.productList}>
                {filterGlasses(allProducts).map(prd =>
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
        url: data.url,
        name: data.name,
        material: data.material,
        price: data.price,
        width: data.width,
        height: data.height,
        code: data.code
    }))

    return { allProducts }
}


export default Produse;
