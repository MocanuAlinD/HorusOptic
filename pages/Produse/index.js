import React, { useState } from 'react';
import styles from '../../styles/Produse.module.css'
import { getProduse } from '../../actions'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'

const Produse = (props) => {
    let { allProducts } = props
    const [filter, setFilter] = useState('all')
    const [price, setPrice] = useState('mic')
    const [name, setName] = useState('atoz')
    const [def, setDef] =useState('mic')

    const filterGlasses = allProducts => {
        if (filter === 'all') {
            if (def === "mic") {
                allProducts.sort((a, b) => a.price > b.price && 1 || -1)
            }
            if (def === 'mare') {
                allProducts.sort((a, b) => a.price < b.price && 1 || -1)
            }
            if (def === 'atoz') {
                allProducts.sort((a, b) => a.name > b.name && 1 || -1)
            }
            if (def === 'ztoa') {
                allProducts.sort((a, b) => a.name < b.name && 1 || -1)
            }
            return allProducts
            
        }
        if (def === "mic") {
            allProducts.sort((a, b) => a.price > b.price && 1 || -1)
        }
        if (def === 'mare') {
            allProducts.sort((a, b) => a.price < b.price && 1 || -1)
        }
        if (def === 'atoz') {
            allProducts.sort((a, b) => a.name > b.name && 1 || -1)
        }
        if (def === 'ztoa') {
            allProducts.sort((a, b) => a.name < b.name && 1 || -1)
        }
        return allProducts.filter(m => {
            return m.name && m.name.includes(filter)
        })
        
        
    }
    // const changePrice = (e) => {
    //     if (price === 'mic') {
    //         console.log('mic')
    //     } else {
    //         console.log('mare')
    //     }
    // }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar
                    brandName={filter}
                    changeCat={word => setFilter(word)}
                    changePrice={word => setDef(word)}
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
