import React, { useState, useEffect } from 'react';
import styles from '../styles/Cart.module.css'
import CartItem from '../components/CartItem'
import Link from 'next/link'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    // const Cart = (props) => {
    console.log('Cart: ', cart)
    const noOfItems = cart.line_items
    // console.log('Cart props: ', props)



    return (
        <div className={styles.cartContainer}>
            <div className={styles.wrapperLeft}>
                {cart.total_items !== 0 ? noOfItems.map(item => (
                    <div key={item.id} className="">
                        <CartItem item={item}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart} />
                    </div>
                )) : ''}
                {cart.total_items !== 0 ? <div className={styles.wrapperRight}>
                    <h4>Subtotal: {cart.subtotal && cart.subtotal.formatted_with_code}</h4>
                    <button className={styles.btnEmpty} onClick={() => handleEmptyCart()}>Goleste cosul</button>
                    <button className={styles.btnCheckout}>Plateste</button>
                </div> : <div className={styles.wrapperRight}>
                    <h4>Nu aveti produse in cos. <Link href='/Produse'><a>Aici</a></Link> vedeti ce va oferim.</h4>
                </div>}
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