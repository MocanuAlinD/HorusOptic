import React from 'react';
import styles from '../../styles/Produse.module.css'
import {getProduse} from '../../actions'
import MiniCard from '../../components/MiniCard'

const Produse = (props) => {
    const { allProducts } = props
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                sidebar
            </div>
            <div className={styles.productList}>
                {allProducts.map(prd=>
                    <MiniCard produs={prd}/>
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
        height: data.height
    }))

    return { allProducts }
}


export default Produse;
