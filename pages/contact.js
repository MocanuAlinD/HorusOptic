import React from "react";
import styles from "../styles/contact.module.css";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImMobile } from "react-icons/im";

const contact = () => {
  const iconSize = "1.5rem";
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__social}>
          <h4>Contact</h4>
        <ul>
          <li>
            {/* <AiOutlineWhatsApp size={iconSize} style={{ color: "#128c7e" }} /> */}
            <AiOutlineWhatsApp size={iconSize}  />
            <a href="http://wa.me/+40742654258" target="_blank">
              WhatsApp
            </a>
          </li>
          <li>
            {/* <ImMobile size={iconSize} style={{ color: "#3a86ff" }} /> */}
            <ImMobile size={iconSize}  />
            <a href="tel:0742654258">0742.654.258</a>
          </li>
          <li>
            {/* <AiOutlineMail size={iconSize} style={{ color: "#430297" }} /> */}
            <AiOutlineMail size={iconSize}  />
            <a href="mailto:horus_top_optic@yahoo.com">
              horus_top_optic@yahoo.com
            </a>
          </li>
          <li>
            {/* <AiOutlineInstagram size={iconSize} style={{ color: "#bc2a8d" }} /> */}
            <AiOutlineInstagram size={iconSize}  />
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default contact;
