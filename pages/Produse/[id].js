import React from 'react';
import { useRouter } from 'next/router'
import { getProduse } from '../../actions'
import styles from '../../styles/dinamicPage.module.css'

const Details = ({ allProducts}) => {
    // console.log(props)
    // const allProducts = props.allProducts
    const router = useRouter()
    const alin = router.query.id
    // console.log(produs)
    // if produs.id == alin return produs[id]
    const page = allProducts[alin-1]
    // const moc = produs.map(je=>{
    //     console.log(je)
    // })
    // console.log(moc)
    return (
        <div className={styles.container}>
            <h4>{page.name} {page.material} {page.culoare}</h4>
        </div>
    );
}


// Details.getInitialProps = async () => {
//     const products = await getProduse()
//     const allProducts = products.map(data => ({
//         id: data.id
//     }))

//     return {
//         allProducts
//     }
// }



Details.getInitialProps = async () => {
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

    return {
        allProducts
    }
}

export default Details;
