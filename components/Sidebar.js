import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css'
import { AiOutlineSearch, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const Sidebar = (props) => {

    const sendAllCats = (e) => {
        props.changeCat(e)
        checkFilter(e)
    }

    const checkFilter = (e) => {
        if (e === 'rame') {
            const brands = document.querySelector('#brand')
            brands.style.display = 'block'

            const allBrands = document.querySelectorAll(".buttonBrands")
            allBrands.forEach(brand => {
                brand.checked=false
            })
            allBrands[0].checked=true
        }
        if (e === 'accesorii') {
            const brands = document.querySelector('#brand')
            brands.style.display = 'none'
        }
    }

    const mobileSendAllCats = (e) => {
        if (e === 'rame') {
            const brands = document.querySelector('#divBrand')
            brands.style.display = 'flex'
            props.changeCat('rame')
        }
        if (e === 'accesorii') {
            const brands = document.querySelector('#divBrand')
            brands.style.display = 'none'
            props.changeCat('accesorii')
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
                    <input defaultChecked type="radio" id="rame" name="categorie" value="rame" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label htmlFor="rame">Rame</label><br />

                    <input type="radio" id="accesoriiSus" name="categorie" value="accesorii" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label htmlFor="accesorii">Accesorii</label>
                </div>

                {/* Meniu PRET - NUME */}
                <div className={styles.bucati}>
                    <h4>Pret</h4>
                    <input defaultChecked type="radio" id="mic" name="pret" value="mic" onClick={() => props.changePriceName('mic')}></input>
                    <label htmlFor="mic">Mic</label> <br />

                    <input type="radio" id="mare" name="pret" value="mare" onClick={() => props.changePriceName('mare')}></input>
                    <label htmlFor="mare">Mare</label> <br />

                    <h4>Nume</h4>
                    <input type="radio" id="atoz" name="pret" value="atoz" onClick={() => props.changePriceName('atoz')}></input>
                    <label htmlFor="atoz">A - Z</label> <br />

                    <input type="radio" id="ztoa" name="pret" value="ztoa" onClick={() => props.changePriceName('ztoa')}></input>
                    <label htmlFor="ztoa">Z - A</label>
                </div>

                {/* Meniu Brand RAME */}
                <div className={styles.bucati} id='brand'>
                    <h4>Brand</h4>

                    <input className="buttonBrands" defaultChecked type="radio" id="marcaAll" name="marca" value="marcaAll" onClick={(e) => props.brandAll(e.target.value)}></input>
                    <label htmlFor="marcaAll">Toate</label><br />
                    {props.sortedNames.map((item, index) => {
                        return (
                            <div key={index} >
                                {/* <input type="radio" id={item} name="marca" value={item} onClick={() => props.brandAll(item)}></input> */}
                                <input className="buttonBrands" type="radio" id={item} name="marca" value={item} onClick={() => props.brandAll(item)}></input>
                                <label htmlFor={item}>{item}</label><br />
                            </div>
                        )
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
                <div className={styles.bucatiDrop}>
                    <AiOutlineSearch className={styles.searchIconDrop} />
                    <input type="search" className={styles.searchDrop} onChange={(e) => props.searchResult(e.target.value.toLowerCase())} />
                </div>

                {/* Categorie RAME-ACCESORII */}
                <div className={styles.bucatiDrop}>
                    <h4>Categorii</h4>
                    <select name="arataMobile" id="arataMobile" onChange={(e) => mobileSendAllCats(e.target.value)}>
                        <option value="rame">Rame</option>
                        <option value="accesorii">Accesorii</option>
                    </select>
                </div>

                {/* BRANDS */}
                <div className={styles.bucatiDrop} id='divBrand'>
                    <h4>Brand</h4>
                    <select name="brand" id="brandMobile" onChange={(e) => props.brandAll(e.target.value)}>
                        <option value="marcaAll">Toate</option>

                        {props.sortedNames.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })}

                    </select>
                </div>

                <div className={styles.bucatiDrop} id='divPret'>
                    <h4>
                        <AiOutlineArrowDown />
                        <AiOutlineArrowUp />
                    </h4>
                    <select id="pret" onChange={(e) => props.changePriceName(e.target.value)}>
                        <optgroup label="Pret"></optgroup>
                        <option value="mic">Pret mic</option>
                        <option value="mare">Pret mare</option>
                        <optgroup label='Nume'></optgroup>
                        <option value="atoz">A - Z</option>
                        <option value="ztoa">Z - A</option>
                    </select>
                </div>

            </div>

        </div>
    );
}

export default Sidebar;
