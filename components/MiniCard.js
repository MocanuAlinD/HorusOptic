import React, { useState } from "react";
import styles from "../styles/MiniCard.module.css";
import Image from "next/image";
import { IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Link from "next/link";
import {FiMoreHorizontal} from 'react-icons/fi'

const MiniCard = ({ produs, onAddToCart }) => {

  return (
    <div
      className={styles.miniCard__container}
    >
      <img src={produs.media.source}/>
      {/* <Image
        layout="intrinsic"
        as="image"
        src={produs.image.url ? produs.image.url : "/no-image.png"}
        width={
          produs.assets[0].image_dimensions.width
            ? produs.assets[0].image_dimensions.width
            : "1920"
        }
        height={
          produs.assets[0].image_dimensions.height
            ? produs.assets[0].image_dimensions.height
            : "1080"
        }
      /> */}
      <h4>{produs.name}</h4>
      <h5 className={styles.miniCard__pret}>
        {produs.price.raw ? produs.price.raw : "0"}&nbsp;<sub>ron</sub>
      </h5>
      <h5
        dangerouslySetInnerHTML={{
          __html: produs.description ? produs.description : "-",
        }}
      ></h5>

      <hr className={styles.miniCard__divider} />
      <h5>
        {!produs.inventory.managed ? (
          <span>In stoc</span>
        ) : produs.inventory.available < 1 ? (
          <span>Doar cu precomanda</span>
        ) : produs.inventory.available < 4 ? (
          <span>Stoc limitat</span>
        ) : (
          <span>In stoc</span>
        )}{" "}
      </h5>

      {!produs.inventory.managed ? (
        <div className={styles.miniCard__cartContainer}>
          <IconButton onClick={() => onAddToCart(produs.id, 1)}>
            <ShoppingCart className={styles.miniCard__shopIcon} />
          </IconButton>
        </div>
      ) : produs.inventory.available < 1 ? (
        <div className={styles.miniCard__linkDisabled}>
          <IconButton className={styles.miniCard__shopIconDisabled}>
            <ShoppingCart />
          </IconButton>
        </div>
      ) : (
        <div className={styles.miniCard__cartContainer}>
          <IconButton
            onClick={() => onAddToCart(produs.id, 1)}
            title="Adauga in cos"
          >
            <ShoppingCart className={styles.miniCard__shopIcon} />
          </IconButton>
        </div>
      )}

      <div className={styles.miniCard__details}>
        <Link href={"/Produse/" + produs.id}>
          <a target="_blank">
            <FiMoreHorizontal title="Vezi detalii produs" />
          </a>
          {/* <a target="_blank"> */}
          {/* <sup>...</sup> */}
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
};

export default MiniCard;
