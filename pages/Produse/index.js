import React, { useState } from "react";
import styles from "../../styles/Produse.module.css";
import MiniCard from "../../components/MiniCard";
import LoadingScreen from "../../components/LoadingScreen";
import Head from "next/head";
import { commerce } from "../../lib/commerce";





// =======================================================================
const Produse = ({
  onAddToCart,
  products,
  // readingGlasses,
  // sunGlasses,
}) => {

  // if (!products) {
  //   return <LoadingScreen actualizare="Incarcare produse..." />;
  // }

  return (
    <div className={styles.produse__container} id="top">
      {/* <Head>
        <title>Produse</title>
      </Head> */}

        <ul>
          {products.map((item)=>(
            <li key={item.id}>
              {item.name}
            </li>
          ))}
          </ul>
    </div>
  );
};

export default Produse;




export async function getStaticProps (){
  console.log("start of getStaticProps")
  const { data: products_1 } = await commerce.products.list({
    limit: 200,
    category_slug: "1",
  });
  const { data: products_2 } = await commerce.products.list({
    limit: 200,
    category_slug: "2",
  });
  // All the products EXPORTED
  const products = [...products_1, ...products_2].reverse(); // REMOVE REVERSE ON PRODUCTION

  console.log("getStaticProps from static running...........")
  
  return {
    props: {
      products,
    },
    revalidate: 2,
  };
};