import React, { useState,useEffect } from 'react';
import styles from '../styles/Sidebar.module.css'
import { AiOutlineSearch, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
// import { BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi'

const Sidebar = (props) => {

    const sendAllCats = (e) => {
        props.changeCat(e)
        checkFilter(e)
    }

    const sendAllBrands = (e) => {
        props.brandAll(e)
    }

    const checkFilter =(e) => {
        if (e ==='rame'){
            const accesorii = document.querySelector('#accesorii')
            accesorii.style.display = 'none'
            const brands = document.querySelector('#brand')
            brands.style.display = 'block'
            const dioptrii = document.querySelector('#dioptrii')
            dioptrii.style.display = 'none'
        }
        if (e==='lentile'){
            const accesorii = document.querySelector('#accesorii')
            accesorii.style.display = 'none'
            const brands = document.querySelector('#brand')
            brands.style.display = 'none'
            const dioptrii = document.querySelector('#dioptrii')
            dioptrii.style.display = 'block'
        }
        if (e==='accesorii'){
            const accesorii = document.querySelector('#accesorii')
            accesorii.style.display = 'block'
            const brands = document.querySelector('#brand')
            brands.style.display = 'none'
            const dioptrii = document.querySelector('#dioptrii')
            dioptrii.style.display = 'none'
        }
    }

    const mobileSendAllCats = (e) => {
        if (e === 'rame') {
            const accesorii = document.querySelector('#divAccesorii')
            accesorii.style.display = 'none'
            const brands = document.querySelector('#divBrand')
            brands.style.display =  'flex'
            const dioptrii = document.querySelector('#divDioptrii')
            dioptrii.style.display = 'none'
            props.changeCat('rame')
        }
        if (e === 'accesorii') {
            const accesorii = document.querySelector('#divAccesorii')
            accesorii.style.display = 'flex'
            const brands = document.querySelector('#divBrand')
            brands.style.display = 'none'
            const dioptrii = document.querySelector('#divDioptrii')
            dioptrii.style.display = 'none'
            props.changeCat('accesorii')
        }
        if (e === 'lentile') {
            const accesorii = document.querySelector('#divAccesorii')
            accesorii.style.display = 'none'
            const brands = document.querySelector('#divBrand')
            brands.style.display = 'none'
            const dioptrii = document.querySelector('#divDioptrii')
            dioptrii.style.display = 'flex'
            props.changeCat('lentile')
        }

    }

    return (
        <div className={styles.container} id='containerScroll'>
            <div className={styles.desktop}>
                {/* Meniu Search */}
                <div className={styles.searchDiv}>
                    <AiOutlineSearch className={styles.searchIcon} />
                    <input type="search" className={styles.search} onChange={(e) => props.searchResult(e.target.value.toLowerCase())} />
                </div>

                {/* Meniu categorii */}
                <div className={styles.bucati}>
                    <h4>Categorie</h4>
                    {/* <input defaultChecked type="radio" id="allCats" name="categorie" value="allCats" onClick={(e) => sendAllCats(e.target.value)}></input> */}
                    {/* <label for="allCats">Toate</label><br /> */}
                    <input defaultChecked type="radio" id="rame" name="categorie" value="rame" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label for="rame">Rame</label><br />
                    <input type="radio" id="lentile" name="categorie" value="lentile" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label for="lentile">Lentile</label><br />
                    <input type="radio" id="accesoriiSus" name="categorie" value="accesorii" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label for="accesorii">Accesorii</label>
                </div>

                {/* Meniu Brand RAME */}
                <div className={styles.bucati} id='brand'>
                    <h4>Brand</h4>
                    <input defaultChecked type="radio" id="marcaAll" name="marca" value="marcaAll" onClick={() => props.brandAll('marcaAll')}></input>
                    <label for="marcaAll">Toate</label><br />
                    <input type="radio" id="guci" name="marca" value="guci" onClick={() => props.brandAll('Guci')}></input>
                    <label for="guci">Guci</label><br />
                    <input type="radio" id="police" name="marca" value="police" onClick={() => props.brandAll('Police')}></input>
                    <label for="police">Police</label> <br />
                    <input type="radio" id="altele" name="marca" value="altele" onClick={() => props.brandAll('Arnette')}></input>
                    <label for="altele">Arnette</label> <br />
                    <input type="radio" id="costa" name="marca" value="costa" onClick={() => props.brandAll('Costa')}></input>
                    <label for="costa">Costa</label><br />
                </div>

                {/* Meniu DIOPTRII */}
                <div className={styles.bucati} id='dioptrii'>
                    <h4>Dioptrii</h4>
                    <input defaultChecked type="radio" id="len1" name="lentile" value="len1"></input>
                    <label for="len1">1</label> <br />
                    <input type="radio" id="len2" name="lentile" value="len2"></input>
                    <label for="len2">2</label><br />
                    <input type="radio" id="len3" name="lentile" value="len3"></input>
                    <label for="len3">3</label><br />
                    <input type="radio" id="len4" name="lentile" value="len4"></input>
                    <label for="len4">4</label>
                </div>

                {/* Meniu ACCESORII */}
                <div className={styles.bucati} id='accesorii'>
                    <h4>Tip</h4>
                    <input defaultChecked type="radio" id="lavetaToate" name="accesorii" value="lavetaToate"></input>
                    <label for="lavetaToate">Toate</label> <br />
                    <input type="radio" id="laveta" name="accesorii" value="laveta"></input>
                    <label for="laveta">Lavete</label> <br />
                    <input type="radio" id="toc" name="accesorii" value="toc"></input>
                    <label for="toc">Tocuri</label><br />
                    <input type="radio" id="snur" name="accesorii" value="snur"></input>
                    <label for="snur">Snururi</label><br />
                </div>

                {/* Meniu PRET */}
                <div className={styles.bucati}>
                    <h4>Pret</h4>
                    <input defaultChecked type="radio" id="mic" name="pret" value="mic" onClick={() => props.changePrice('mic')}></input>
                    <label for="mic">Mic</label> <br />
                    <input type="radio" id="mare" name="pret" value="mare" onClick={() => props.changePrice('mare')}></input>
                    <label for="mare">Mare</label>
                </div>

                {/* Meniu NUME */}
                <div className={styles.bucati}>
                    <h4>Nume</h4>
                    <input defaultChecked type="radio" id="atoz" name="nume" value="atoz" onClick={() => props.changePrice('atoz')}></input>
                    <label for="atoz">A - Z</label> <br />
                    <input type="radio" id="ztoa" name="nume" value="ztoa" onClick={() => props.changePrice('ztoa')}></input>
                    <label for="ztoa">Z - A</label>
                </div>
            </div>
            {/* =========================================================================================== */}
            {/* =========================================================================================== */}
            {/* =========================================================================================== */}
            {/* =========================================================================================== */}
            {/* =========================================================================================== */}
            {/* MOBILE */}
            <div className={styles.mobile}>

                <div className={styles.bucatiDrop}>
                    <AiOutlineSearch className={styles.searchIconDrop} />
                    <input type="search" className={styles.searchDrop} onChange={(e) => props.searchResult(e.target.value.toLowerCase())}/>
                </div>

                <div className={styles.bucatiDrop}>
                    <h4>Categorii</h4>
                    <select name="arataMobile" id="arataMobile" onChange={(e) => mobileSendAllCats(e.target.value)}>
                        {/* <option value="toate">Toate</option> */}
                        <option value="rame">Rame</option>
                        <option value="lentile">Lentile</option>
                        <option value="accesorii">Accesorii</option>
                    </select>
                </div>

                <div className={styles.bucatiDrop} id='divBrand'>
                    <h4>Brand</h4>
                    <select name="brand" id="brandMobile" onChange={(e) => sendAllBrands(e.target.value)}>
                        <option value="marcaAll">Toate</option>
                        <option value="Guci">Guci</option>
                        <option value="Police">Police</option>
                        <option value="Arnette">Arnette</option>
                        <option value="Costa">Costa</option>
                    </select>
                </div>

                <div className={styles.bucatiDrop} id='divDioptrii'>
                    <h4>Dioptrii</h4>
                    <select name="dioptrii" id="dioptrii">
                        <option value="len1">1</option>
                        <option value="len2">2</option>
                        <option value="len3">3</option>
                        <option value="len4">4</option>
                        <option value="len5">5</option>
                    </select>
                </div>

                <div className={styles.bucatiDrop} id='divAccesorii'>
                    <h4>Accesorii</h4>
                    <select name="accesorii" id="accesoriiToate">
                        <option value="accesorii_1">Toate</option>
                        <option value="accesorii_2">Lavete</option>
                        <option value="accesorii_3">Tocuri</option>
                        <option value="accesorii_4">Snururi</option>
                    </select>
                </div>

                <div className={styles.bucatiDrop} id='divPret'>
                    <h4>Pret</h4>
                    <select name="pret" id="pret" onChange={(e) => props.changePrice(e.target.value)}>
                        <option value="mic">Mic</option>
                        <option value="mare">Mare</option>
                    </select>
                </div>

                <div className={styles.bucatiDrop} id='divNume'>
                    <h4>Nume</h4>
                    <select name="nume" id="nume" onChange={(e) => props.changePrice(e.target.value)}>
                        <option value="atoz">A- Z</option>
                        <option value="ztoa">Z - A</option>
                    </select>
                </div>


            </div>

        </div>
    );
}

export default Sidebar;
