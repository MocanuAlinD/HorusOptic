import React from "react";
import styles from "../styles/Ramburs.module.css";
import Link from "next/link";
import Empty from "../components/Empty";
import { Button, TextField, Typography,Tooltip } from "@material-ui/core";
import { AiFillDelete } from "react-icons/ai";

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
        {/* Products list - is invisible */}
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

        {/* ======================================================= */}
        <div className={styles.check}>
          <TextField
            name="Nume"
            required
            type="text"
            fullWidth
            id="nume"
            label="Nume"
            variant="standard"
            spellCheck="false"
          />
        </div>

        <div className={styles.check}>
          <TextField
            name="Telefon"
            required
            type="text"
            fullWidth
            id="nume"
            label="Telefon"
            variant="standard"
            spellCheck="false"
          />
        </div>

        <div className={styles.check}>
          <TextField
            name="Email"
            required
            type="email"
            fullWidth
            id="nume"
            label="Email"
            variant="standard"
            spellCheck="false"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>

        <div className={styles.check}>
          <TextField
            name="Adresa"
            required
            type="text"
            fullWidth
            id="address"
            label="Adresa"
            variant="standard"
            spellCheck="false"
          />
        </div>
        <Typography variant="subtitle1">Comentariu</Typography>
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
          // value="http://localhost:3000/"
          value="http://horus-optic.vercel.app/Produse/"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="table"></input>

        <div className={styles.ramburs__reset}>
          <Button
            type="reset"
            color="primary"
            startIcon={<AiFillDelete />}
            variant="outlined"
            size="small"
          >
            RESET
          </Button>
        </div>

        <div className={styles.ramburs__buttonsContainer}>
          <Link href="/Cart">
              <Button color="primary" variant="outlined">
                Inapoi la cos
              </Button>
          </Link>
          <Button color="primary" type="submit" variant="contained">
            Trimite
          </Button>
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
