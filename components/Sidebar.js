import React, {useState} from "react";
import styles from "../styles/Sidebar.module.css";
import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Sidebar = ({
  brand,
  brandNames,
  changeCat,
  setSearch,
  changePriceName,
  setBrand,
  setBrandNames,
  readingGlasses,
  sunGlasses,
}) => {

  const [src, setSrc] = useState('')


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
      const brands = document.querySelector("#divBrand");
      brands.style.display = "flex";
      setBrandNames(readingGlasses);

      const allBrandsMobile = document.querySelector("#brandMobile");
      allBrandsMobile.value = allBrandsMobile[0].value;
      setBrandNames(sunGlasses);
    }

    if (e === "ochelariAccesorii") {
      const brands = document.querySelector("#divBrand");
      brands.style.display = "none";
    }
  };

  const removeSearch = () => {
    setSrc("")
    setSearch("")
  }

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
            <button className={styles.searchCauta} onClick={()=> setSearch(src)} disabled={src ? false : true}>Cauta</button>
            <button className={styles.searchSterge} onClick={removeSearch}>Sterge</button>
          </div>
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
