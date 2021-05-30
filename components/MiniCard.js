import React from 'react';
import styles from '../styles/MiniCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { commerce } from '../lib/commerce';



const MiniCard = ({ produs, change, onAddToCart }) => {
    console.log(produs.name, produs.inventory.available)

    return (
        <div key={produs.id} className={styles.container}>
            <Image priority='true' layout='responsive' as='image' src={produs.media.source} width={1920} height={1080} />
            <h4>{produs.name}</h4>
            <h5 className={styles.pret}>{produs.price.raw} <sub>ron</sub></h5>
            <h5 dangerouslySetInnerHTML={{ __html: produs.description }}></h5>
            <hr className={styles.divider}/>
            <h5>In stoc: <span>{produs.inventory.available}</span> </h5>
            {/* <div className={styles.link}><button onClick={() => onAddToCart(produs.id, 1)} disabled={true && produs.inventory.available < 99}>Adauga in cos</button></div> */}







            {/* <div className={styles.link}><button onClick={() => onAddToCart(produs.id, 1)} disabled={true && produs.inventory.available < 99}>Adauga in cos</button></div> */}
            {produs.inventory.available < 97 ? 
                (<div className={styles.link}><button title="Produsul nu este pe stoc. Comanda doar la telefon." disabled={true && produs.inventory.available < 99}>INDISPONIBIL</button></div>) : 
                (<div className={styles.link}><button onClick={() => onAddToCart(produs.id, 1)}>Adauga in cos</button></div>)
            }






            <div className={styles.details}><a onClick={() => change(produs)}>Detalii</a></div>
        </div>
    );
}

export default MiniCard;
