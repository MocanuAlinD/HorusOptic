import React, { useState } from "react";
import styles from "../../styles/Produse.module.css";
import MiniCard from "../../components/MiniCard";
import Sidebar from "../../components/Sidebar";
import LoadingScreen from "../../components/LoadingScreen";
import Pagination from "../../components/Pagination";
import Head from "next/head";
import { commerce } from "../../lib/commerce";

export const getStaticProps = async () => {
  console.log("getStaticProps from static running...........")
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

  return {
    props: {
      products,
      // readingGlasses,
      // sunGlasses,
    },
    revalidate: 5
  };
};



// =======================================================================
const Produse = ({
  onAddToCart,
  loading,
  products,
  // readingGlasses,
  // sunGlasses,
}) => {



  
  // ==================================================================
  // Names for the brands
  const abc = products.filter((x) => {
    return (
      x.name &&
      (x.categories[0].slug === "rame" || x.categories[1].slug === "rame")
    );
  });

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
  // EXPORTED
  readingGlasses = readingGlasses.sort(
    (a, b) => (a.toLowerCase() > b.toLowerCase() && 1) || -1
  );
  // =======================================================

  const SunProducts = products.filter((x) => {
    return x.description && x.description.includes("soare");
  });

  let sunGlasses = [];

  for (let i in SunProducts) {
    if (sunGlasses.includes(SunProducts[i].name)) {
      continue;
    } else {
      sunGlasses.push(SunProducts[i].name);
    }
  }
  // EXPORTED
  sunGlasses = sunGlasses.sort(
    (a, b) => (a.toLowerCase() > b.toLowerCase() && 1) || -1
  );












  const ochelariVedere = products.filter((x) => {
    return (
      (x.categories[0].slug === "rame" || x.categories[1].slug === "rame") &&
      !(x.name && x.description.includes("soare"))
    );
  });
  const ochelariVedereLen = ochelariVedere.length;

  const ochelariSoare = products.filter((x) => {
    return (
      (x.categories[0].slug === "rame" || x.categories[1].slug === "rame") &&
      x.name &&
      x.description.includes("soare")
    );
  });
  const ochelariSoareLen = ochelariSoare.length;

  const ochelariAccesorii = products.filter((x) => {
    return (
      x.categories[0].slug === "accesorii" ||
      x.categories[1].slug === "accesorii"
    );
  });
  const ochelariAccesoriiLen = ochelariAccesorii.length;

  // Spinner while is loading product
  if (loading) {
    return <LoadingScreen actualizare="Actualizare produse..." />;
  }

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
            search={search}
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
              setPostsPerPage={setPostsPerPage}
              postsPerPage={postsPerPage}
              totalPosts={currentPosts}
              paginate={paginate}
              changeShow={changeShow}
            />
          )}

          {search !== "" ? (
            <h3 className={styles.produse__searchResult}>
              {searchItems().length}{" "}
              {searchItems().length === 1 ? "produs" : "produse"}{" "}
              {searchItems().length === 1 ? "gasit" : "gasite"}
            </h3>
          ) : (
            ""
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
