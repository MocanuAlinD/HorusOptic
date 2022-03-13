import React, { useState, useEffect } from "react";
import styles from "../styles/Cart.module.css";
import CartItem from "../components/CartItem";
import Link from "next/link";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core";

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
              <div className={styles.cart__pickPayment}>
                <RadioGroup
                  row
                  aria-label="Plata"
                  defaultValue="ramburs"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="ramburs"
                    control={
                      <Radio
                        // color="primary"
                        onClick={() => setPick("ramburs")}
                        style={{ color: "var(--color-primary-light)" }}
                      />
                    }
                    label="Ramburs"
                  />
                  <FormControlLabel
                    value="card"
                    control={
                      <Radio
                        color="primary"
                        onClick={() => setPick("card")}
                        style={{ color: "var(--color-primary-light)" }}
                      />
                    }
                    label="Card"
                  />
                </RadioGroup>
              </div>

              <div className={styles.cart__buttons}>

                <Button variant="outlined" onClick={() => onEmptyCart()} className={styles.cart__emptyCart}>
                  Goleste cosul
                </Button>

                {pick === "card" ? (
                  <Link href="/Checkout">
                    {/* <a>Plateste</a> */}
                    <Button variant='contained' className={styles.cart__next}>Plateste</Button>
                  </Link>
                ) : (
                  <Link href="/Ramburs">
                    <Button variant='contained' className={styles.cart__next}>Continua</Button>
                    {/* <a>Continua</a> */}
                  </Link>
                )}
              </div>
            </>
          ) : (
            <div className={styles.cart_goToProducts}>
              <h5>
                Nu aveti produse in cos.{" "}
                <Link href="/produse">
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
