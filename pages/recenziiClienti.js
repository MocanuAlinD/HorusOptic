import React, { useState, useEffect } from "react";
import styles from "../styles/recenziiClienti.module.css";
import firebase from "../firebase";
// import { FaStar } from "react-icons/fa";
import Stars from '../components/Stars'

const recenziiClienti = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase.child("Contacts").on("value", (s) => {
      if (s.val() !== null) {
        setData([...Object.values(s.val())]);
      } else {
        setData([]);
      }
    });
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.reviewsContainer}>
        <h4 className={styles.title}>Parerea clientilor</h4>
        <div className={styles.reviewsCards}>
          {data &&
            data.map((item, idx) => (
              <div key={idx} className={styles.reviewItem}>
                <div className={styles.imageName}>
                  <img src={item.picture} />
                  <h4>{item.name}</h4>
                </div>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;{item.review}</h5>
                <Stars item={item.rating}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default recenziiClienti;
