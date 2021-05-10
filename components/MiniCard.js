import React from 'react';
import styles from '../styles/MiniCard.module.css'
import Link from 'next/link'
import Image from 'next/image'


const MiniCard = (props) => {
    const { produs } = props
    return (
        <div key={produs.id} className={styles.container}>
                <Image priority as='image' src={produs.url} width={produs.width} height={produs.height}/>
                <h4>{produs.name}</h4>
                <h5>Code: {produs.code}</h5>
                <h5>Pret: {produs.price} lei</h5>
                <h5>Material: {produs.material}</h5>
            <div className={styles.link}><Link href='' ><a>Adauga in cos</a></Link></div>
            <div className={styles.details}><Link href='' ><a>Detalii</a></Link></div>
        </div>
    );
}

export default MiniCard;
