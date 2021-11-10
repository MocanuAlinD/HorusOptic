import React, { useState, useEffect } from "react";
import styles from "../styles/recenziiClienti.module.css";
import firebase from "../firebase";
import { FaStar } from "react-icons/fa";

const recenziiClienti = () => {
  const [data, setData] = useState({});
  const [alin, setAlin] = useState([]);

  useEffect(() => {
    firebase.child("Contacts").on("value", (s) => {
      if (s.val() !== null) {
        console.log(Object.values(s.val()));
        setData(s.val());
        setAlin([...Object.values(s.val())]);
      } else {
        setData({});
        setAlin([]);
      }
    });
    return () => {
      setAlin([]);
      setData({});
    };
  }, []);

  console.log("Alin: ", alin);

  return (
    <div className={styles.container}>
      <div className={styles.reviewsContainer}>
        <h4 className={styles.title}>Parerea clientilor</h4>
        <div className={styles.reviewsCards}>
          {alin &&
            alin.map((item, idx) => (
              <div key={idx} className={styles.reviewItem}>
                <div className={styles.imageName}>
                  <img src={item.picture} />
                  <h4>{item.name}</h4>
                </div>
                <h5>{item.review}</h5>
                <div className={styles.onlyStars}>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <input type="radio" name="rating" value={item.rating} />
                        <FaStar
                          className={styles.star}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default recenziiClienti;
