import React, { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";
import { ImMobile } from "react-icons/im";
import { BiArrowFromLeft } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BiSkipNext } from "react-icons/bi";
import Link from "next/link";
import firebase from "../firebase";

const Footer = () => {
  const [data, setData] = useState({});
  const [item, setItem] = useState("");
  const [checkTimer, setCheckTimer] = useState(true);

  const clickme = () => {
    const oneItem =
      Object.values(data)[
        Math.floor(Math.random() * Object.values(data).length)
      ];
    setItem(oneItem);
  };

  const consu = () => {
    setCheckTimer(!checkTimer);
  };

  useEffect(() => {
    firebase.child("Contacts").on("value", (s) => {
      if (s.val() !== null) {
        setItem(s.val()[Object.keys(s.val())[0]]);
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
      const interval = setInterval(clickme, 5000);
      return () => clearInterval(interval);
    }
  }, [item, checkTimer]);

  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__left}>
        <h3>Contact</h3>
        <hr width="100%" style={{ height: ".1rem" }} />
        <div className={styles.footer__social}>
          <ul>
            <li>
              <AiOutlineWhatsApp
                size="1rem"
                style={{ marginBottom: "-0.2rem", marginRight: ".5rem" }}
              />
              <a href="http://wa.me/+40742654258" target="_blank">
                Scrie-ne pe WhatsApp
              </a>
            </li>
            <li>
              <ImMobile
                size="1rem"
                style={{ marginBottom: "-0.2rem", marginRight: ".5rem" }}
              />
              <a href="tel:0742654258">0742.654.258</a>
            </li>
            <li>
              <AiOutlineMail
                size="1rem"
                style={{ marginBottom: "-0.2rem", marginRight: ".5rem" }}
              />
              <a href="mailto:horus_top_optic@yahoo.com">
                horus_top_optic@yahoo.com
              </a>
            </li>
            <li>
              <AiOutlineInstagram
                size="1rem"
                style={{ marginBottom: "-0.2rem", marginRight: ".5rem" }}
              />
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

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
        <h3 className={styles.footer__commentsTitle}>Recenzii</h3>
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
              <h5>{item.review}</h5>
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
            <AiOutlinePauseCircle className={styles.button} onClick={consu} />
          ) : (
            <AiOutlinePlayCircle className={styles.button} onClick={consu} />
          )}
          <BiSkipNext className={styles.buttonNext} onClick={clickme} />
        </div>
        <Link href="/recenzii">
          <a className={styles.footer__btnLasaRecenzie}>Lasa o recenzie</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
