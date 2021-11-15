import React, { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { BiSkipNext } from "react-icons/bi";
import Link from "next/link";
import firebase from "../firebase";
import { Skeleton } from "@mui/material";
import Stars from "./Stars";

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

  const nextItem = () => {
    if (checkTimer === true) {
      setCheckTimer(false);
    }
    randomItem();
  };

  useEffect(() => {
    firebase.child("Contacts").on("value", (s) => {
      if (s.val() !== null) {
        setData(s.val());
        setItem(
          s.val()[
            Object.keys(s.val())[
              Math.floor(Math.random() * Object.keys(s.val()).length)
            ]
          ]
        );
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
        <h3 className={styles.footer__commentsTitle}>Recenzii</h3>
        <hr
          style={{
            width: "100%",
            height: ".1rem",
            marginBottom: ".5rem",
          }}
        />

        <div className={styles.footer__commentsReview}>
          <div className={styles.footer__imgName}>
            {item && (
              <img
                src={item.picture || "/no-image.png"}
                alt=""
                width="25px"
                height="25px"
              />
            )}

            {item ? (
              <h4>{item.name}</h4>
            ) : (
              <Skeleton
                variant="text"
                width={200}
                height={25}
                sx={{ bgcolor: "grey.500" }}
              />
            )}
          </div>

          <div className={styles.footer__ratingText}>
            {item ? (
              <h5>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {item.review.length > 40
                  ? item.review.slice(0, 50) + " . . ."
                  : item.review}
              </h5>
            ) : (
              <h5>
                <Skeleton
                  variant="text"
                  width={200}
                  height={80}
                  sx={{ bgcolor: "grey.500" }}
                />
              </h5>
            )}

            {item ? (
              <Stars item={item.rating} />
            ) : (
              <Skeleton
                variant="text"
                width={200}
                sx={{ bgcolor: "grey.500" }}
              />
            )}
          </div>
        </div>

        <div className={styles.playPauseContainer}>
          {checkTimer ? (
            <AiOutlinePauseCircle
              className={styles.button}
              onClick={() => setCheckTimer(!checkTimer)}
            />
          ) : (
            <AiOutlinePlayCircle
              className={styles.button}
              onClick={() => setCheckTimer(!checkTimer)}
            />
          )}
          <BiSkipNext className={styles.buttonNext} onClick={nextItem} />
        </div>

        <div className={styles.bottomButtonsContainer}>
          <Link href="/recenziiClienti">
            <a className={styles.footer__btnVeziToate}>Vezi toate</a>
          </Link>
          <Link href="/recenzii">
            <a className={styles.footer__btnLasaRecenzie}>Lasa o recenzie</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
