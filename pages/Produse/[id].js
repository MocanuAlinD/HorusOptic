import React, { useState } from 'react'
import { commerce } from '../../lib/commerce'
import styles from '../../styles/Produse.module.css'
import { IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import Image from 'next/image'


export const getStaticPaths = async () => {
    const { data: products_1 } = await commerce.products.list({ limit: 10, category_slug: '1' })
    const { data: products_2 } = await commerce.products.list({ limit: 10, category_slug: '2' })
    const products = [...products_1, ...products_2]

    const paths = products.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const singleProduct = await commerce.products.retrieve(id)

    return {
        props:  {item: singleProduct}
    }
}



const Details = ({ item, onAddToCart}) => {

    if (!item){
        return (
            <div>Loading item......</div>
        )
    }
    // console.log("Item is: ", item)

    const [currentImage, setCurrentImage] = useState(item.media.source)

    return (
        <div className={styles.containerDr}>
            {/* <button className={styles.backBtn} onClick={() => goback()}>&#60;</button> */}
            <div className={styles.alin2}>
                <div className={styles.alin4} id='slider1'>
                    <Image layout='intrinsic' as='image' src={currentImage} width={1920} height={1080} />
                </div>
                <div className={styles.smallImages}>
                    {item.assets.map((item, index) =>
                        <div key={item.id} className={styles.smallImage}>
                            <Image src={item.url} layout='intrinsic' width={120} height={72} onClick={() => setCurrentImage(item.url)} />
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.rightSide}>
                <h4>{item.name}</h4>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: item.description }}></div>

                {/* {item.inventory.managed ? (
                    <div className={styles.link} >
                        <IconButton onClick={() => onAddToCart(item.id, 1)}>
                            <ShoppingCart className={styles.shopIcon} />
                        </IconButton>
                    </div>) :
                    (
                        item.inventory.available < 1 ?
                            (<div className={styles.linkDisabled}>
                                <IconButton className={styles.shopIconDisabled} >
                                    <ShoppingCart />
                                </IconButton>
                            </div>) :
                            (<div className={styles.link}>
                                <IconButton onClick={() => onAddToCart(item.id, 1)}>
                                    <ShoppingCart className={styles.shopIcon} />
                                </IconButton>
                            </div>)
                    )} */}

                <h4>Pret: {item.price.raw} <sub>ron</sub></h4>
            </div>
        </div>
    )
}

export default Details
