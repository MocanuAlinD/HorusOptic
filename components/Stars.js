import React from 'react'
import styles from '../styles/Stars.module.css'
import { FaStar } from "react-icons/fa";

const Stars = ({item}) => {
    return (
      <div className={styles.onlyStars}>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input type="radio" name="rating" value={item} />
              <FaStar
                className={styles.star}
                color={
                  ratingValue <= item
                    ? "var(--color-primary-light)"
                    : "var(--color-primary-lighten2)"
                }
                size="20"
              />
            </label>
          );
        })}
      </div>
    );
}

export default Stars
