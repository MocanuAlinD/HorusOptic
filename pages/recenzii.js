import React, { useState } from "react";
import styles from "../styles/recenzii.module.css";
import { useSession, signIn } from "next-auth/react";
import { FaStar } from "react-icons/fa";

const recenzii = ({ fetchComments }) => {
  const { data: session } = useSession();

  const [maxChar, setMaxChar] = useState(0);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const postData = async () => {
    const send = {
      picture: session.user.image,
      name: session.user.name,
      review: text,
      rating: +rating,
    };
    const dan = await fetch("./api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send),
    });
    const je = await dan.json();
    console.log(je.message);
    fetchComments();
  };

  const checkLen = (e) => {
    setMaxChar(e.length);
    setText(e);
  };

  return (
    <div className={styles.recenzii__container}>
      {!session && (
        <div className={styles.recenzii__noSession}>
          <h4>Te rugam sa te autentifici pentru a lasa un review</h4>
          <button onClick={() => signIn("google")}>Google</button>
          <button onClick={() => signIn("facebook")}>Facebook</button>
        </div>
      )}
      {session && (
        <div className={styles.recenzii__session}>
          <div className={styles.recenzii__sessionHeader}>
            <img
              src={session.user.image}
              alt={session.user.name}
              width="50"
              height="50"
            />
            <h4>{session.user.name}</h4>
          </div>
          <div className={styles.recenzii__sessionFooter}>
            <textarea
              name="review"
              cols="30"
              rows="10"
              spellCheck="false"
              maxLength="100"
              onChange={(e) => checkLen(e.target.value)}
            ></textarea>
            <div className={styles.recenzii__rating}>
              <h4>Rating</h4>
              <div className={styles.recenzii__onlyStars}>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        className={styles.recenzii__star}
                        color={
                          ratingValue <= rating
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
            <div className={styles.recenzii__bottom}>
              <h5>{maxChar}/100</h5>
              <button onClick={postData}>Posteaza</button>
            </div>
          </div>
          {/* <h4>{session.user.email}</h4> */}
          {/* <h4>{session.user.name}</h4> */}
        </div>
      )}
    </div>
  );
};

export default recenzii;
