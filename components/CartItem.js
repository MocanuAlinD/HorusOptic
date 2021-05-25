import React from 'react';
import styles from '../styles/CartItem.module.css'
import Image from 'next/image'


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart}) => {
    console.log('Cart Items: ', item)

    return (
        <div key={item.id} className={styles.container}>
            <Image priority='true' layout='responsive' as='image' src={item.media.source} width={1920} height={1080} />
            <div className={styles.namePrice}>
                <h4 className={styles.name}>{item.name}</h4>
                <h4 className={styles.price}>{item.price.raw * item.quantity} <sub>ron</sub></h4>
            </div>
            <div className={styles.buttons}>
                <div className={styles.plusMinus}>
                    <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                    <h5>{item.quantity}</h5>
                    <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className={styles.sterge} onClick={() => onRemoveFromCart(item.id)}>Sterge</button>
            </div>
        </div>
    );
}

export default CartItem;
