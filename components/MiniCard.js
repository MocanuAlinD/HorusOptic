import React, { useState } from 'react';
import styles from '../styles/MiniCard.module.css'
import Image from 'next/image'

const MiniCard = ({ produs, change, onAddToCart }) => {

    const stock = 98

    return (
        <div key={produs.id} className={styles.container}>
            <Image priority='true' layout='responsive' as='image' src={produs.media.source} width={1920} height={1080} />
            <h4>{produs.name}</h4>
            <h5 className={styles.pret}>{produs.price.raw} <sub>ron</sub></h5>
            <h5 dangerouslySetInnerHTML={{ __html: produs.description }}></h5>
            <hr className={styles.divider} />
            <h5>{produs.inventory.managed ? "In stoc:" : "Stoc epuizat"} <span>{produs.inventory.managed && produs.inventory.available}</span> </h5>

            {produs.inventory.available < stock ?
                (<div className={styles.link}><button title="Produsul nu este pe stoc. Comanda la telefon sau email." disabled={true && produs.inventory.available < stock}>INDISPONIBIL</button></div>) :
                (<div className={styles.link}><button onClick={() => onAddToCart(produs.id, 1)}>Adauga in cos</button></div>)
            }

            <div className={styles.details}><a onClick={() => change(produs)}>Detalii</a></div>
        </div>
    );
}

export default MiniCard;
