import React, { useState, useEffect } from 'react';
import styles from '../styles/Cart.module.css'
import CartItem from '../components/CartItem'
import Link from 'next/link'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const noOfItems = cart.line_items

    if (!cart.line_items) return 'Loading'

    return (
        <div className={styles.cartContainer}>
            <div className={styles.wrapper}>

                <div className={styles.sus}>
                    {noOfItems ? noOfItems.map(item => (
                        <div key={item.id} className="">
                            <CartItem 
                                item={item}
                                onUpdateCartQty={onUpdateCartQty}
                                onRemoveFromCart={onRemoveFromCart} />
                        </div>
                    )) : ''}
                </div>


                <div className={styles.jos}>
                    {cart.line_items.length ? <div className={styles.wrapperRight}>
                        <h4>Subtotal: {cart.subtotal && cart.subtotal.formatted_with_code}</h4>
                        <div className={styles.endButtons}>
                            <button className={styles.btnEmpty} onClick={() => onEmptyCart()}>Goleste cosul</button>
                            {/* <button className={styles.btnCheckout}>Plateste</button> */}
                            <Link href='/Checkout' className={styles.btnCheckout}><a>Plateste</a></Link>
                        </div>
                    </div> : <div className={styles.emptyCart}>
                        <h5>Nu aveti produse in cos. <Link href='/Produse'><a>Aici</a></Link> vedeti produsele noastre.</h5>
                    </div>}
                </div>

            </div>
        </div>
    );
}

export default Cart;



{/* <div className={styles.wrapperRight}>
    <h4>Subtotal: {cart.subtotal && cart.subtotal.formatted_with_code}</h4>
    <button className={styles.btnEmpty} onClick={() => handleEmptyCart()}>Goleste cosul</button>
    <button className={styles.btnCheckout}>Plateste</button>
</div> */}