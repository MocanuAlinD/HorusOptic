import React from "react";
import styles from "../styles/Ramburs.module.css";
import Link from "next/link";
import Empty from "../components/Empty";

const Ramburs = ({ cart, onEmptyCart }) => {
  // console.log(cart.total_items);
  // console.log(cart);
  if (cart.total_items === 0 || cart.total_items === undefined) {
    return <Empty />;
  }

  const removeCart = (e) => {
    // console.log(e.target);
    
    setTimeout(() => {
      onEmptyCart();
      // console.log("remove cart");
    }, 3000);
    
  };

  return (
    <div className={styles.ramburs__container}>
      <form
        action="https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532"
        method="POST"
        onSubmit={(e) => removeCart(e)}
      >
        <textarea
          // style={{ display: "none" }}
          name="Prods"
          id=""
          cols="30"
          rows="10"
          value={cart.line_items.map(
            (item) =>
              item.media.source +
              "     " +
              item.quantity +
              "     " +
              item.price.formatted +
              "\n"
          )}
          readOnly
          required
        >
          {cart.line_items.map(
            (item) =>
              item.media.source +
              "--" +
              item.quantity +
              "--" +
              item.price.formatted +
              "\n"
          )}
        </textarea>

        <input type="text" name="Nume" required placeholder="nume" />
        <input type="tel" name="Telefon" required placeholder="telefon" />
        <input type="email" name="Email" required placeholder="email" />
        <input
          type="address"
          name="Adresa"
          required
          placeholder="adresa de livrare"
        />
        <textarea
          name="Comentarii"
          id=""
          cols="30"
          rows="10"
          placeholder="adauga un comentariu"
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/Produse"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="table"></input>
        <div className={styles.ramburs__buttonsContainer}>
          <Link href="/Cart">
            <a>Inapoi la cos</a>
          </Link>
          <button type="submit">Trimite</button>
        </div>
      </form>
    </div>
  );
};

export default Ramburs;

// cart.line_items.length;
// https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532

/* <input
          type="text"
          name="produse"
          value={
            cart.total_items !== 0 || cart.total_items !== undefined
              ? cart.line_items.map(
                  (item) =>
                    item.media.source +
                    "--" +
                    item.quantity +
                    "--" +
                    item.price.formatted +
                    "\n"
                )
              : "-"
          }
          readOnly
          // style={{display: "none"}}
        /> */
