import React, { useState, useEffect } from "react";
import styles from "../styles/Produse.module.css";
import MiniCard from "../components/MiniCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import Head from "next/head";
import { commerce } from "../lib/commerce";

export async function getStaticProps() {
  const { data: products_1 } = await commerce.products.list({
    limit: 200,
    category_slug: "1",
    sortBy: 'created'
  });
  const { data: products_2 } = await commerce.products.list({
    limit: 200,
    category_slug: "2",
    sortBy: 'created'
  });

  const tempList = [];
  const both = [...products_1, ...products_2];

  both.map((item) => {
    const tempItem = {
      id: item.id,
      imgUrl: item.image.url,
      name: item.name,
      price: item.price.raw,
      inventory: item.inventory,
      categories: item.categories,
      description: item.description,
    };
    tempList.push(tempItem);
  });

  const products = JSON.stringify(tempList);

  return {
    props: {
      products,
    },
    revalidate: 5,
  };
}

// =======================================================================
const Produse = ({ onAddToCart, products }) => {
  const temp = JSON.parse(products);
  const listVedere = [];
  const listSoare = [];
  const listAccesorii = [];
  const brandNameV = [];
  const brandNameS = [];

  temp.map((item) => {
    if (
      item.categories[0].slug === "rame" ||
      item.categories[1].slug === "rame"
    ) {
      if (item.description.includes("soare")) {
        listSoare.push(item);
        if (!brandNameS.includes(item.name)) {
          brandNameS.push(item.name);
        }
      } else {
        listVedere.push(item);
        if (!brandNameV.includes(item.name)) {
          brandNameV.push(item.name);
        }
      }
    }
    if (
      item.categories[0].slug === "accesorii" ||
      item.categories[1].slug === "accesorii"
    ) {
      listAccesorii.push(item);
    }
  });



  const brandNameVedere = brandNameV.sort((a, b) => (a.toLowerCase() > b.toLowerCase() && 1) || -1);
  const brandNameSoare = brandNameS.sort((a, b) => (a.toLowerCase() > b.toLowerCase() && 1) || -1);
  const listVedereLEN = listVedere.length;
  const listSoareLEN = listSoare.length;
  const listAccesoriiLEN = listAccesorii.length;

  const [brand, setBrand] = useState("marcaAll");
  const [search, setSearch] = useState("");
  const [def, setDef] = useState("mic");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPosts, setCurrentPosts] = useState(listVedereLEN);
  const [allProducts, setAllProducts] = useState(listVedere);
  const [brandNames, setBrandNames] = useState(brandNameVedere);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const changeBrand = () => {
    if (brand === "marcaAll") {
      return allProducts.slice(indexOfFirstPost, indexOfLastPost);
      // return allProducts
    }
    if (brand !== "marcaAll") {
      return allProducts.filter((m) => {
        return m.name && m.name === brand;
      });
    }
  };

  const changePriceName = (e) => {
    setDef(e);
    if (e === "mic") {
      return allProducts.sort(
        (a, b) => (parseInt(a.price) > parseInt(b.price) && 1) || -1
      );
    }
    if (e === "mare") {
      return allProducts.sort(
        (a, b) => (parseInt(a.price) < parseInt(b.price) && 1) || -1
      );
    }
    if (e === "atoz") {
      return allProducts.sort(
        (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() && 1) || -1
      );
    }
    if (e === "ztoa") {
      return allProducts.sort(
        (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() && 1) || -1
      );
    }
  };

  const searchItems = () => {
    if (search === "") {
      return [];
    }
    const a = allProducts.filter((x) => {
      return (
        (x.name && x.name.toLowerCase().includes(search)) ||
        (x.description && x.description.toLowerCase().includes(search))
      );
    });
    return a;
  };

  // Change page
  const paginate = (e, pageNumber) => {
    console.log("paginate");
    setCurrentPage(pageNumber);
    let buttons = document.querySelectorAll(".pagination__button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  // Show products per page select
  const changeShow = (e) => {
    let buttons = document.querySelectorAll(".pagination__button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    buttons[0].classList.add("active");
    setPostsPerPage(e);
    setCurrentPage(1);
  };

  // Change category
  const changecat = (cat) => {
    setBrand("marcaAll");
    setCurrentPage(1);
    if (cat === "ochelariVedere") {
      setCurrentPosts(listVedereLEN);
      setAllProducts(listVedere);
    }
    if (cat === "ochelariSoare") {
      setCurrentPosts(listSoareLEN);
      setAllProducts(listSoare);
    }
    if (cat === "ochelariAccesorii") {
      setCurrentPosts(listAccesoriiLEN);
      setAllProducts(listAccesorii);
    }
    if (brand === "marcaAll") {
      let buttons = document.querySelectorAll(".pagination__button");
      buttons.forEach((btn) => btn.classList.remove("active"));
      buttons[0].classList.add("active");
    }
  };

  return (
    <div className={styles.produse__container} id="top">
      <Head>
        <title>Produse</title>
      </Head>

      <div className={styles.produse__wrapper}>
        <div className={styles.produse__sidebar}>
          <Sidebar
            brand={brand}
            brandNames={brandNames}
            changeCat={(cat) => changecat(cat)}
            changePriceName={changePriceName}
            setSearch={setSearch}
            setBrand={setBrand}
            setBrandNames={setBrandNames}
            brandNameVedere={brandNameVedere}
            brandNameSoare={brandNameSoare}
          />
        </div>

        <div className={styles.produse__list}>
          {search === "" && brand === "marcaAll" && (
            <Pagination
              className={styles.produse__pagination}
              setPostsPerPage={setPostsPerPage}
              postsPerPage={postsPerPage}
              totalPosts={currentPosts}
              paginate={paginate}
              changeShow={changeShow}
            />
          )}

          {search !== "" && (
            <h3 className={styles.produse__searchResult}>
              {searchItems().length}{" "}
              {searchItems().length === 1 ? "produs" : "produse"}{" "}
              {searchItems().length === 1 ? "gasit" : "gasite"}
            </h3>
          )}
          {/* Products */}
          {search === "" &&
            changeBrand(allProducts).map((prd) => (
              <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} />
            ))}
          {search !== ""
            ? searchItems().map((prd) => (
                <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} />
              ))
            : []}
        </div>
      </div>
    </div>
  );
};

export default Produse;
