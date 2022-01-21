import React from "react";
import styles from "../styles/Sidebar.module.css";
import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsSquare } from "react-icons/bs";

const Sidebar = ({
  changeCat,
  search,
  setSearch,
  changePriceName,
  brand,
  setBrand,
  brandNames,
  setBrandNames,
  readingGlasses,
  sunGlasses,
}) => {



  const sendAllCats = (e) => {
    changeCat(e);
    checkFilter(e);
    if (e === "ochelariSoare") {
      setBrandNames(sunGlasses);
    } else if (e === "ochelariVedere") {
      setBrandNames(readingGlasses);
    }
  };

  const checkFilter = (e) => {
    if (e === "ochelariVedere" || e === "ochelariSoare") {
      const brands = document.querySelector("#brand");
      brands.style.display = "block";

      const allBrands = document.querySelectorAll(".buttonBrands");
      allBrands.forEach((brand) => {
        brand.checked = false;
      });
      allBrands[0].checked = true;
    }
    if (e === "ochelariAccesorii") {
      const brands = document.querySelector("#brand");
      brands.style.display = "none";
    }
  };

  const mobileSendAllCats = (e) => {
    changeCat(e);
    if (e === "ochelariVedere") {
      const brands = document.querySelector("#divBrand");
      brands.style.display = "flex";
      setBrandNames(readingGlasses);

      const allBrandsMobile = document.querySelector("#brandMobile");
      allBrandsMobile.value = allBrandsMobile[0].value;
    }
    if (e === "ochelariSoare") {
      setBrandNames(sunGlasses);
    }

    if (e === "ochelariAccesorii") {
      const brands = document.querySelector("#divBrand");
      brands.style.display = "none";
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        {/* Meniu Search */}
        <div className={styles.desktop__searchContainer}>
          <AiOutlineSearch className={styles.desktop__searchIcon} />
          <input
            placeholder="Cauta..."
            type="search"
            className={styles.desktop__search}
            spellCheck="false"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            value={search}
          />
        </div>
        
        {/* Meniu categorii */}
        <div className={styles.desktop__items}>
          <h4>Categorie</h4>
          <input
            id="vedere"
            defaultChecked
            type="radio"
            name="categorie"
            value="ochelariVedere"
            onClick={(e) => sendAllCats(e.target.value)}
          ></input>
          <label htmlFor="vedere">Ochelari vedere</label>
          <br />

          <input
            id="soare"
            type="radio"
            name="categorie"
            value="ochelariSoare"
            onClick={(e) => sendAllCats(e.target.value)}
          ></input>
          <label htmlFor="soare">Ochelari soare</label>
          <br />

          <input
            id="accesorii"
            type="radio"
            name="categorie"
            value="ochelariAccesorii"
            onClick={(e) => sendAllCats(e.target.value)}
          ></input>
          <label htmlFor="accesorii">Accesorii</label>
        </div>

        {/* Meniu PRET - NUME */}
        <div className={styles.desktop__items}>
          <h4>Pret</h4>
          <input
            defaultChecked
            type="radio"
            id="mic"
            name="pret"
            value="mic"
            onClick={() => changePriceName("mic")}
          ></input>
          <label htmlFor="mic">Mic</label> <br />
          <input
            type="radio"
            id="mare"
            name="pret"
            value="mare"
            onClick={() => changePriceName("mare")}
          ></input>
          <label htmlFor="mare">Mare</label> <br />
          {brand === "marcaAll" ? (
            <>
              <h4>Nume</h4>
              <input
                type="radio"
                id="atoz"
                name="pret"
                value="atoz"
                onClick={() => changePriceName("atoz")}
              ></input>
              <label htmlFor="atoz">A - Z</label> <br />
              <input
                type="radio"
                id="ztoa"
                name="pret"
                value="ztoa"
                onClick={() => changePriceName("ztoa")}
              ></input>
              <label htmlFor="ztoa">Z - A</label>
            </>
          ) : (
            <>
              <h4>Nume</h4>
              <input disabled style={{ background: "#ccc" }} value="" />
              <label htmlFor="atoz">A - Z</label> <br />
              <input disabled style={{ background: "#ccc" }} value="" />
              <label htmlFor="ztoa">Z - A</label>
            </>
          )}
        </div>

        {/* Meniu Brand RAME */}
        <div className={styles.desktop__items} id="brand">
          <h4>Brand</h4>

          <input
            className="buttonBrands"
            defaultChecked
            type="radio"
            id="marcaAll"
            name="marca"
            value="marcaAll"
            onClick={(e) => setBrand(e.target.value)}
          ></input>
          <label htmlFor="marcaAll">Toate</label>
          {/* <br /> */}
          {brandNames.map((item, index) => {
            return (
              <div key={index}>
                <input
                  className="buttonBrands"
                  type="radio"
                  id={item}
                  name="marca"
                  value={item}
                  onClick={() => setBrand(item)}
                ></input>
                <label htmlFor={item}>{item}</label>
                <br />
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================================== */}
      {/* =========================================================================================== */}
      {/* =========================================================================================== */}
      {/* =========================================================================================== */}
      {/* =========================================================================================== */}

      {/* MOBILE */}
      <div className={styles.mobile}>
        {/* Search */}
        {/* bucatiDrop = mobile__items */}
        <div className={styles.mobile__items + " " + styles.mobile__search}>
          <AiOutlineSearch className={styles.searchIconDrop} />
          <input
            placeholder="Cauta..."
            type="search"
            className={styles.searchDrop}
            spellCheck="false"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            value={search}
          />
        </div>

        {/* Categorie RAME-ACCESORII */}
        <div className={styles.mobile__items}>
          <h4>Categorii</h4>
          <select
            name="arataMobile"
            id="arataMobile"
            onChange={(e) => mobileSendAllCats(e.target.value)}
          >
            <option value="ochelariVedere">Ochelari vedere</option>
            <option value="ochelariSoare">Ochelari soare</option>
            <option value="ochelariAccesorii">Accesorii</option>
          </select>
        </div>

        {/* BRANDS */}
        <div className={styles.mobile__items} id="divBrand">
          <h4>Brand</h4>
          <select
            name="brand"
            id="brandMobile"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="marcaAll">Toate</option>

            {brandNames.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.mobile__items} id="divPret">
          <h4>
            <AiOutlineArrowDown />
            <AiOutlineArrowUp />
          </h4>
          <select id="pret" onChange={(e) => changePriceName(e.target.value)}>
            <optgroup label="Pret"></optgroup>
            <option value="mic">Pret mic</option>
            <option value="mare">Pret mare</option>
            {brand === "marcaAll" ? (
              <>
                <optgroup label="Nume"></optgroup>
                <option value="atoz">A - Z</option>
                <option value="ztoa">Z - A</option>
              </>
            ) : (
              <>
                <optgroup label="Nume"></optgroup>
                <option disabled value="atoz">
                  A - Z
                </option>
                <option disabled value="ztoa">
                  Z - A
                </option>
              </>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
