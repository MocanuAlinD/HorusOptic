import React, { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BiSkipNext } from "react-icons/bi";
import Link from "next/link";
import firebase from "../firebase";

const Footer = () => {
  const [data, setData] = useState({});
  const [item, setItem] = useState("");
  const [checkTimer, setCheckTimer] = useState(true);

  const randomItem = () => {
    const oneItem =
      Object.values(data)[
        Math.floor(Math.random() * Object.values(data).length)
      ];
    setItem(oneItem);
  };

  const playPauseTimer = () => {
    setCheckTimer(!checkTimer);
  };

  const nextItem = () => {
    if (checkTimer === true) {
      setCheckTimer(false);
    }
    randomItem();
  };

  useEffect(() => {
    firebase.child("Contacts").on("value", (s) => {
      if (s.val() !== null) {
        // console.log(s.val()[Object.keys(s.val())[Math.floor(Math.random()*Object.keys(s.val()).length)]]);
        // console.log(s.val()[Object.keys(s.val())[0]]);
        // setItem(s.val()[Object.keys(s.val())[0]]);
        setItem(
          s.val()[
            Object.keys(s.val())[
              Math.floor(Math.random() * Object.keys(s.val()).length)
            ]
          ]
        );
        setData(s.val());
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);

  useEffect(() => {
    if (checkTimer) {
      const interval = setInterval(randomItem, 5000);
      return () => clearInterval(interval);
    }
  }, [item, checkTimer]);

  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__middle}>
        <h3>Despre</h3>
        <hr width="100%" style={{ height: ".1rem", marginBottom: ".5rem" }} />
        <Link href="/istoriaochelarilor">
          <a>Istoria ochelarilor de vedere</a>
        </Link>
        <Link href="/nastere">
          <a>Locul de naștere al ochelarilor</a>
        </Link>
        <Link href="/tipuridelentile">
          <a>Tipuri de lentile</a>
        </Link>
        <Link href="/lentiledecontact">
          <a>Lentile de contact</a>
        </Link>
        <Link href="/ochelariideazi">
          <a>Ochelarii din ziua de azi</a>
        </Link>
        <Link href="/ochelarisoare">
          <a>Ochelarii de soare</a>
        </Link>
        <Link href="/consultopticamedicala">
          <a>Consult optica medicala</a>
        </Link>
      </div>

      <div className={styles.footer__right}>
        <Link href="#">
          <a>Inainte sa cumperi !</a>
        </Link>
        <Link href="/PoliticaDeConfidentialitate">
          <a>Politica de confidentialitate</a>
        </Link>
        <Link href="/Garantie">
          <a>Garantie</a>
        </Link>
        <h4>CUI: 40666971</h4>
        <h4>J13/856/2019</h4>
      </div>

      <div className={styles.footer__commentsContainer}>
        {/* <h3 className={styles.footer__commentsTitle}>Recenzii</h3> */}
        <Link href="/recenziiClienti">
          <a className={styles.footer__commentsTitle}>Recenzii</a>
        </Link>
        <hr
          style={{
            width: "100%",
            height: ".1rem",
            marginBottom: ".5rem",
          }}
        />
        {item && (
          <div className={styles.footer__commentsReview}>
            <div className={styles.footer__imgName}>
              <img
                src={item.picture || "/no-image.png"}
                alt=""
                width="25px"
                height="25px"
              />
              <h4>{item.name}</h4>
            </div>

            <div className={styles.footer__ratingText}>
              <h5>
                {item.review.length > 40
                  ? item.review.slice(0, 50) + " . . ."
                  : item.review}
              </h5>
              <div className={styles.recenzii__onlyStars}>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input type="radio" name="rating" value={item.rating} />
                      <FaStar
                        className={styles.recenzii__star}
                        color={
                          ratingValue <= item.rating
                            ? "var(--color-primary-light)"
                            : "var(--color-primary-lighten2)"
                        }
                        size="20"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className={styles.playPauseContainer}>
          {checkTimer ? (
            <AiOutlinePauseCircle
              className={styles.button}
              onClick={playPauseTimer}
            />
          ) : (
            <AiOutlinePlayCircle
              className={styles.button}
              onClick={playPauseTimer}
            />
          )}
          <BiSkipNext className={styles.buttonNext} onClick={nextItem} />
        </div>
        <Link href="/recenzii">
          <a className={styles.footer__btnLasaRecenzie}>Lasa o recenzie</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
