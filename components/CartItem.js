import React from 'react';
import styles from '../styles/CartItem.module.css'
import Image from 'next/image'


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart}) => {

    const handleUpdateCartQty = (lineItemId, newQuantity) => (onUpdateCartQty(lineItemId, newQuantity), console.log("LineItemID: ", lineItemId, "newQuantity: ",newQuantity))

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId)

    return (
        <div key={item.id} className={styles.container}>
            <div className={styles.img}>
                <Image priority='true' layout='responsive' as='image' src={item.media.source} width={1920} height={1080} />
            </div>
            <div className={styles.textButtons}>
                <div className={styles.namePrice}>
                    <h4 className={styles.name}>{item.name}</h4>
                    <h4 className={styles.price}>{item.line_total.raw} <sub>ron</sub></h4>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.plusMinus}>
                        <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                        <h5>{item.quantity}</h5>
                        <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className={styles.sterge} onClick={() => handleRemoveFromCart(item.id)}>Sterge</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
