import React, { useState, useEffect } from 'react';
import styles from '../styles/Cart.module.css'
import CartItem from '../components/CartItem'
import Link from 'next/link'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const noOfItems = cart.line_items

    if (!cart.line_items) return 'Loading'

    return (
        <div className={styles.cart__container}>
            <div className={styles.cart__wrapper}>

                <div className={styles.cart__contentUp}>
                    {noOfItems ? noOfItems.map(item => (
                        <div key={item.id} className="">
                            <CartItem 
                                item={item}
                                onUpdateCartQty={onUpdateCartQty}
                                onRemoveFromCart={onRemoveFromCart} />
                        </div>
                    )) : ''}
                </div>


                <div className={styles.cart__contentDown}>
                    {cart.line_items.length ? 
                    <>
                        <h4>Subtotal: {cart.subtotal && cart.subtotal.formatted_with_code}</h4>
                        <div className={styles.cart__buttons}>
                            <button className={styles.cart__btnEmptyCart} onClick={() => onEmptyCart()}>Goleste cosul</button>
                            {/* <button className={styles.btnCheckout}>Plateste</button> */}
                            <Link href='/Checkout'><a>Plateste</a></Link>
                        </div>
                    </> : 
                    <div className={styles.cart_goToProducts}>
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