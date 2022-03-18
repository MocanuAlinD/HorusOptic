import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Sidebar = ({
  brand,
  setBrand,
  brandNames,
  setBrandNames,
  changeCat,
  setSearch,
  changePriceName,
  brandNameVedere,
  brandNameSoare,
}) => {
  const [src, setSrc] = useState("");

  const sendCategorie = (e) => {
    changeCat(e);
    const allBrandsMobile = document.querySelector("#brandMobile");
    const brands = document.querySelector("#divBrand");
    const pret = document.querySelector("#pret");
    pret.value = pret[0].value;
    if (e === "ochelariVedere") {
      brands.style.display = "flex";
      setBrandNames(brandNameVedere);

      allBrandsMobile.value = allBrandsMobile[0].value;
    }
    if (e === "ochelariSoare") {
      brands.style.display = "flex";
      allBrandsMobile.value = allBrandsMobile[0].value;
      setBrandNames(brandNameSoare);
    }

    if (e === "ochelariAccesorii") {
      brands.style.display = "none";
    }
  };

  const removeSearch = () => {
    setSrc("");
    setSearch("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        {/* Search */}
        <div className={styles.mobile__items + " " + styles.mobile__search}>
          <div className={styles.searchContainer}>
            <AiOutlineSearch className={styles.searchIconDrop} />
            <input
              placeholder="Cauta..."
              type="text"
              className={styles.searchDrop}
              spellCheck="false"
              // onChange={(e) => setSearch(e.target.value.toLowerCase())}
              onChange={(e) => setSrc(e.target.value.toLowerCase())}
              value={src}
            />
          </div>
          <div className={styles.searchButtons}>
            <button
              className={styles.searchSterge}
              onClick={removeSearch}
              disabled={!src}
            >
              Sterge
            </button>
            <button
              className={styles.searchCauta}
              onClick={() => setSearch(src)}
              disabled={!src}
            >
              Cauta
            </button>
          </div>
        </div>

        {/* Categorie RAME-ACCESORII */}
        <div className={styles.mobile__items}>
          <h4>Categorii</h4>
          <select
            name="arataMobile"
            id="arataMobile"
            onChange={(e) => sendCategorie(e.target.value)}
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
            {brand === "marcaAll" && (
              <>
                <optgroup label="Nume"></optgroup>
                <option value="atoz">A - Z</option>
                <option value="ztoa">Z - A</option>
              </>
            )}
          </select>
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
