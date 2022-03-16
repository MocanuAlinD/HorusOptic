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
  });
  const { data: products_2 } = await commerce.products.list({
    limit: 200,
    category_slug: "2",
  });

  const tempList = []
  const both = [...products_1, ...products_2]

  both.map(item=>{
    const tempItem = {
      id: item.id,
      imgDim: item.image.dimensions,
      imgUrl: item.image.url,
      name: item.name,
      price: item.price.raw,
      inventory: item.inventory,
      categories: item.categories,
      description: item.description
    }
    tempList.push(tempItem)
  })

  const products = JSON.stringify(tempList)
  // const products = JSON.stringify([...products_1, ...products_2].reverse()); // REMOVE REVERSE ON PRODUCTION
  // const products = [...products_1, ...products_2].reverse() // REMOVE REVERSE ON PRODUCTION
  // console.log("typeof products staticProps: ", typeof products);

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}

// =======================================================================
const Produse = ({ onAddToCart, products }) => {
  const [all, setAll] = useState(JSON.parse(products));

  // All glasses
  const abc = all.filter(
    (x) =>
      x.name &&
      (x.categories[0].slug === "rame" || x.categories[1].slug === "rame")
  );
  // ===================================================================

  // Reading glasses - all products
  const ochelariVedere = all.filter((x) => {
    return (
      (x.categories[0].slug === "rame" || x.categories[1].slug === "rame") &&
      !(x.name && x.description.includes("soare"))
    );
  });
  const ochelariVedereLen = ochelariVedere.length;

  // Reading glasses - brand names
  let readingGlasses = [];
  for (let i in abc) {
    if (abc[i].description.includes("soare")) {
      continue;
    }
    if (readingGlasses.includes(abc[i].name)) {
      continue;
    } else {
      readingGlasses.push(abc[i].name);
    }
  }

  readingGlasses = readingGlasses.sort(
    (a, b) => (a.toLowerCase() > b.toLowerCase() && 1) || -1
  );
  // =======================================================

  // Sun glasses - all products
  const ochelariSoare = all.filter((x) => {
    return x.description && x.description.includes("soare");
  });
  const ochelariSoareLen = ochelariSoare.length;

  // Sun glasses - brand names
  let sunGlasses = [];

  for (let i in ochelariSoare) {
    if (sunGlasses.includes(ochelariSoare[i].name)) {
      continue;
    } else {
      sunGlasses.push(ochelariSoare[i].name);
    }
  }
  sunGlasses = sunGlasses.sort(
    (a, b) => (a.toLowerCase() > b.toLowerCase() && 1) || -1
  );
  // ============================================================

  // Accesories - all products (doesnt have brand names)
  const ochelariAccesorii = all.filter((x) => {
    return (
      x.categories[0].slug === "accesorii" ||
      x.categories[1].slug === "accesorii"
    );
  });
  const ochelariAccesoriiLen = ochelariAccesorii.length;
  // ============================================================

  const [brand, setBrand] = useState("marcaAll");
  const [search, setSearch] = useState("");
  const [def, setDef] = useState("mic");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPosts, setCurrentPosts] = useState(ochelariVedereLen);
  const [allProducts, setAllProducts] = useState(ochelariVedere);
  const [brandNames, setBrandNames] = useState(readingGlasses);

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
        (a, b) => (parseInt(a.price.raw) > parseInt(b.price.raw) && 1) || -1
      );
    }
    if (e === "mare") {
      return allProducts.sort(
        (a, b) => (parseInt(a.price.raw) < parseInt(b.price.raw) && 1) || -1
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
      setCurrentPosts(ochelariVedereLen);
      setAllProducts(ochelariVedere);
    }
    if (cat === "ochelariSoare") {
      setCurrentPosts(ochelariSoareLen);
      setAllProducts(ochelariSoare);
    }
    if (cat === "ochelariAccesorii") {
      setCurrentPosts(ochelariAccesoriiLen);
      setAllProducts(ochelariAccesorii);
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
            changePriceName={(word) => changePriceName(word)}
            setSearch={setSearch}
            setBrand={setBrand}
            setBrandNames={setBrandNames}
            readingGlasses={readingGlasses}
            sunGlasses={sunGlasses}
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
        </div>
      </div>
    </div>
  );
};

export default Produse;
