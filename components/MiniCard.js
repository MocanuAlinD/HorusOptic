import React, { useState } from "react";
import styles from "../styles/MiniCard.module.css";
import Image from "next/image";
import { IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Link from "next/link";
import ServerDown from "./ServerDown";

const MiniCard = ({ produs, onAddToCart }) => {
  // if (new Error()) {
  //   return (
  //     <>
  //       <ServerDown />
  //     </>
  //   );
  // }

  return (
    <div className={styles.miniCard__container}>
      <Image
        layout="intrinsic"
        as="image"
        src={produs.media.source}
        width={produs.assets[0].image_dimensions.width}
        height={produs.assets[0].image_dimensions.height}
      />
      <h4>{produs.name}</h4>
      <h5 className={styles.miniCard__pret}>
        {produs.price.raw}&nbsp;<sub>ron</sub>
      </h5>
      <h5 dangerouslySetInnerHTML={{ __html: produs.description }}></h5>

      <hr className={styles.miniCard__divider} />
      <h5>
        {!produs.inventory.managed ? (
          <span>In stoc</span>
        ) : produs.inventory.available < 1 ? (
          <span>Doar cu precomanda</span>
        ) : produs.inventory.available < 4 ? (
          // <span>Stoc limitat: <span style={{ color: '#f5cb5c' }}>{produs.inventory.available}</span></span>
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
          <IconButton onClick={() => onAddToCart(produs.id, 1)}>
            <ShoppingCart className={styles.miniCard__shopIcon} />
          </IconButton>
        </div>
      )}

      <div className={styles.miniCard__details}>
        <Link href={"/Produse/" + produs.id}>
          <a target="_blank">...</a>
        </Link>
      </div>
    </div>
  );
};

export default MiniCard;
