import React, { useState } from 'react';
import styles from '../styles/MiniCard.module.css'
import Image from 'next/image'
import { IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import Link from 'next/link'

const MiniCard = ({ produs, change, onAddToCart }) => {
    // const dims = produs.assets[0].image_dimensions

    return (
        <div className={styles.container}>
            {/* <Image blurDataURL={produs.media.source} placeholder="blur" layout='intrinsic' src={produs.media.source} width={1920} height={1080} /> */}
            {/* <Image layout='intrinsic' as='image' src={produs.media.source} width={1920} height={1080} /> */}
            <Image layout='intrinsic' as='image' src={produs.media.source} width={produs.assets[0].image_dimensions.width} height={produs.assets[0].image_dimensions.height} />
            {/* <Image as='image' src={produs.media.source} width={192} height={108} /> */}
            {/* <Image quality='10' loading='eager' layout='responsive' as='image' src={produs.media.source} width={dims.width} height={dims.height} /> */}
            {/* <Image layout='fixed' src={produs.media.source} width={192} height={108} /> */}
            <h4>{produs.name}</h4>
            <h5 className={styles.pret}>{produs.price.raw}&nbsp;<sub>ron</sub></h5>
            <h5 dangerouslySetInnerHTML={{ __html: produs.description }}></h5>
            <hr className={styles.divider} />
            <h5>{!produs.inventory.managed ? <span>In stoc</span> : (
                produs.inventory.available < 1 ? <span>Doar cu precomanda</span> : (
                    produs.inventory.available < 4 ? (
                        // <span>Stoc limitat: <span style={{ color: '#f5cb5c' }}>{produs.inventory.available}</span></span>
                        <span>Stoc limitat</span>
                    ) : <span>In stoc</span>
                )
            )} </h5>

            {!produs.inventory.managed ? (
                <div className={styles.link} >
                    <IconButton onClick={() => onAddToCart(produs.id, 1)}>
                        <ShoppingCart className={styles.shopIcon} />
                    </IconButton>
                </div>) :
                (
                    produs.inventory.available < 1 ?
                        (<div className={styles.linkDisabled}>
                            <IconButton className={styles.shopIconDisabled} >
                                <ShoppingCart />
                            </IconButton>
                        </div>) :
                        (<div className={styles.link}>
                            <IconButton onClick={() => onAddToCart(produs.id, 1)}>
                                <ShoppingCart className={styles.shopIcon} />
                            </IconButton>
                        </div>)
                )
            }



            {/* <div className={styles.details}><a onClick={() => change(produs)}>...</a></div> */}
            <div className={styles.details}>
                <a onClick={() => change(produs)}>...</a>
                {/* <Link href={'/Produse/' + produs.id} >
                    <a target="_blank">
                        Detalii
                    </a>
                </Link> */}
            </div>
        </div>
    );
}

export default MiniCard;
