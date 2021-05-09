import React from 'react';
import styles from '../styles/MiniCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MiniCard = (props) => {
    const { produs } = props
    console.log('Produs: ', produs.id)
    return (
        <div key={produs.id} className={styles.container}>
                <Image className={styles.img} priority as='image' src={produs.url} width={produs.width} height={produs.height}/>
                <h4>{produs.name}</h4>
                <h5>{produs.price} lei</h5>
            <div className={styles.link}><Link href='' ><a>Adauga in cos</a></Link></div>
        </div>
    );
}

export default MiniCard;
