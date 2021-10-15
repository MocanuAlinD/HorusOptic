import React from "react";
import styles from "../styles/Ramburs.module.css";
import Link from "next/link";
import Empty from "../components/Empty";

const Ramburs = ({ cart, onEmptyCart }) => {
  // console.log(cart);
  // console.log(cart);
  if (cart.total_items === 0 || cart.total_items === undefined) {
    return <Empty />;
  }

  return (
    <div className={styles.ramburs__container}>
      <form
        action="https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532"
        method="POST"
        onSubmit={onEmptyCart}
      >
        <textarea
          style={{ display: "none" }}
          name="Prods"
          id=""
          cols="30"
          rows="10"
          value={
            cart.line_items.map(
              (item) =>
                item.media.source +
                "     " +
                item.quantity +
                "     " +
                item.price.formatted +
                "\n"
            ) +
            "Total: " +
            cart.subtotal.raw +
            " " +
            cart.currency.symbol
          }
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

        <div className={styles.check}>
          <input
            className={styles.form__input}
            type="text"
            name="Nume"
            required
            placeholder=" "
            id="nume"
            spellCheck="false"
          />
          <label htmlFor="nume" className={styles.form__label}>
            Nume
          </label>
        </div>

        <div className={styles.check}>
          <input
            className={styles.form__input}
            type="text"
            name="Telefon"
            required
            placeholder=" "
            id="telefon"
            spellCheck="false"
          />
          <label htmlFor="telefon" className={styles.form__label}>
            Telefon
          </label>
        </div>

        <div className={styles.check}>
          <input
            className={styles.form__input}
            type="email"
            name="Email"
            required
            placeholder=" "
            id="email"
            spellCheck="false"
            // autoComplete="off"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
        </div>

        <div className={styles.check}>
          <input
            className={styles.form__input}
            id="address"
            type="address"
            name="Adresa"
            required
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="address" className={styles.form__label}>
            Adresa de livrare
          </label>
        </div>

        <textarea
          name="Comentarii"
          id=""
          cols="30"
          rows="10"
          spellCheck="false"
        ></textarea>

        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="table"></input>
        <button type="reset" className={styles.resetBtn}>
          Reset
        </button>
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
