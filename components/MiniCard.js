import React from 'react';
import styles from '../styles/MiniCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { commerce } from '../lib/commerce';



const MiniCard = ({ produs, change, onAddToCart}) => {

    
    return (
        <div key={produs.id} className={styles.container}>
            
            <Image priority='true' layout='responsive' as='image' src={produs.media.source} width={1920} height={1080} />
            <h4>{produs.name}</h4>
            <h5 className={styles.pret}>{produs.price.raw} <sub>ron</sub></h5>
            <h5 dangerouslySetInnerHTML={{ __html: produs.description }}></h5>
            <div className={styles.link}><a onClick={() => onAddToCart(produs.id, 1)}>Adauga in cos</a></div>
            {/* <div className={styles.details}><a onClick={() => change(produs.id)}>Detalii</a></div> */}
            {/* <div className={styles.details}><Link href={`/Produse/${produs.id}`}><a>Detalii</a></Link></div> */}
            <div className={styles.details}><a onClick={()=>change(produs)}>Detalii</a></div>
        </div>
    );
}

export default MiniCard;
