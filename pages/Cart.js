import React, { useState, useEffect } from "react";
import styles from "../styles/Cart.module.css";
import CartItem from "../components/CartItem";
import Link from "next/link";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const [pick, setPick] = useState("ramburs");
  const noOfItems = cart.line_items;

  if (!cart.line_items) return "Loading";

  


  return (
    <div className={styles.cart__container}>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__contentUp}>
          {noOfItems
            ? noOfItems.map((item) => (
                <div key={item.id} className="">
                  <CartItem
                    item={item}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                </div>
              ))
            : ""}
        </div>

        <div className={styles.cart__contentDown}>
          {cart.line_items.length ? (
            <>
              <h4>
                Subtotal: {cart.subtotal && cart.subtotal.formatted_with_code}
              </h4>
              <div className={styles.cart__buttons}>
                <button
                  className={styles.cart__btnEmptyCart}
                  onClick={() => onEmptyCart()}
                >
                  Goleste cosul
                </button>

                <div className={styles.cart__pickPayment}>
                  <div className={styles.cart__ramburs}>
                    <label htmlFor="plata">Ramburs</label>
                    <input
                      type="radio"
                      name="card"
                      onClick={() => setPick("ramburs")}
                    />
                  </div>
                  <div className={styles.cart__card}>
                    <label htmlFor="plata">Card</label>
                    <input
                      type="radio"
                      name="card"
                      onClick={() => setPick("card")}
                    />
                  </div>
                </div>

                {pick === "card" ? (
                  <Link href="/Checkout">
                    <a>Plateste</a>
                  </Link>
                ) : (
                  <Link href="/Ramburs">
                    <a>Plateste</a>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <div className={styles.cart_goToProducts}>
              <h5>
                Nu aveti produse in cos.{" "}
                <Link href="/Produse">
                  <a>Aici</a>
                </Link>{" "}
                vedeti produsele noastre.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;




// {
//   pick === "card" ? (
//     <Link href="/Checkout">
//       <a>Plateste</a>
//     </Link>
//   ) : (
//     <Link href="/Ramburs">
//       <a>Plateste</a>
//     </Link>
//   );
// }



// {
//   pick === "" ? (
//     ""
//   ) : pick === "card" ? (
//     <Link href="/Checkout">
//       <a>Plateste</a>
//     </Link>
//   ) : (
//     pick === "ramburs" && (
//       <Link href="/Ramburs">
//         <a>Plateste</a>
//       </Link>
//     )
//   );
// }