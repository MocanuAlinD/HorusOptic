import React from "react";
import styles from "../styles/Ramburs.module.css";
import Link from "next/link";

const Ramburs = ({ cart }) => {
  if(!cart.line_items) return
  // console.log(cart.line_items[0]);

  const items = cart.line_items.map(
    (item) =>
      item.media.source + "--" + item.quantity + "--" + item.price.formatted
  );
  console.log(items);

  return (
    <div className={styles.ramburs__container}>
      {cart.line_items.length ? (
        <form
          action="https://formsubmit.co/81b98d1d934c3b7f0e32bc02eb386532 "
          method="POST"
        >
          <input
            type="hidden"
            name="produse"
            value={cart.line_items.map(
              (item) =>
                item.media.source +
                "--" +
                item.quantity +
                "--" +
                item.price.formatted
            )}
            readOnly
          />
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
            value="https://horus-optic.vercel.app/"
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Ramburs;

// cart.line_items.length;
