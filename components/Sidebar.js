import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css'
import { AiOutlineSearch, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const Sidebar = (props) => {

    const sendAllCats = (e) => {
        // console.log(e)
        props.changeCat(e)
        checkFilter(e)
    }

    const checkFilter = (e) => {
        if (e === 'ochelariVedere' || e === 'ochelariSoare') {
            const brands = document.querySelector('#brand')
            brands.style.display = 'block'

            const allBrands = document.querySelectorAll(".buttonBrands")
            allBrands.forEach(brand => {
                brand.checked = false
            })
            allBrands[0].checked = true
        }
        if (e === 'ochelariAccesorii') {
            const brands = document.querySelector('#brand')
            brands.style.display = 'none'
        }
    }

    const mobileSendAllCats = (e) => {
        props.changeCat(e)
        if (e === 'ochelariVedere') {
            const brands = document.querySelector('#divBrand')
            brands.style.display = 'flex'
            // props.changeCat('ochelariVedere')

            const allBrandsMobile = document.querySelector("#brandMobile")
            allBrandsMobile.value = allBrandsMobile[0].value
        }
        if (e === 'ochelariAccesorii') {
            const brands = document.querySelector('#divBrand')
            brands.style.display = 'none'
            // props.changeCat('ochelariAccesorii')
        }
    }

    return (
        <div className={styles.container} id='containerScroll'>
            <div className={styles.desktop}>
                {/* Meniu Search */}
                <div className={styles.searchDiv}>
                    <AiOutlineSearch className={styles.searchIcon} />
                    <input placeholder="Cauta..." type="search" className={styles.search} onChange={(e) => props.setSearch(e.target.value.toLowerCase())} />
                </div>

                {/* Meniu categorii */}
                <div className={styles.bucati}>
                    <h4>Categorie</h4>
                    <input defaultChecked type="radio" name="categorie" value="ochelariVedere" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label htmlFor="vedere">Ochelari vedere</label><br />

                    <input type="radio" name="categorie" value="ochelariSoare" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label htmlFor="soare">Ochelari soare</label><br />

                    <input type="radio" name="categorie" value="ochelariAccesorii" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label htmlFor="accesorii">Accesorii</label>
                </div>

                {/* Meniu PRET - NUME */}
                <div className={styles.bucati}>
                    <h4>Pret</h4>
                    <input defaultChecked type="radio" id="mic" name="pret" value="mic" onClick={() => props.changePriceName('mic')}></input>
                    <label htmlFor="mic">Mic</label> <br />

                    <input type="radio" id="mare" name="pret" value="mare" onClick={() => props.changePriceName('mare')}></input>
                    <label htmlFor="mare">Mare</label> <br />

                    {/* <h4>Nume</h4>
                    <input type="radio" id="atoz" name="pret" value="atoz" onClick={() => props.changePriceName('atoz')}></input>
                    <label htmlFor="atoz">A - Z</label> <br /> */}

                    {props.brand === 'marcaAll' ? (
                        <>
                            <h4>Nume</h4>
                            <input type="radio" id="atoz" name="pret" value="atoz" onClick={() => props.changePriceName('atoz')}></input>
                            <label htmlFor="atoz">A - Z</label> <br />

                            <input type="radio" id="ztoa" name="pret" value="ztoa" onClick={() => props.changePriceName('ztoa')}></input>
                            <label htmlFor="ztoa">Z - A</label>
                        </>
                    ) : (
                        <>
                            <h4>Nume</h4>
                            <input disabled style={{ background: '#ccc' }} value='' />
                            <label htmlFor="atoz">A - Z</label> <br />

                            <input disabled style={{ background: '#ccc' }} value='' />
                            <label htmlFor="ztoa">Z - A</label>
                        </>
                    )}


                </div>

                {/* Meniu Brand RAME */}
                <div className={styles.bucati} id='brand'>
                    <h4>Brand</h4>

                    <input className="buttonBrands" defaultChecked type="radio" id="marcaAll" name="marca" value="marcaAll" onClick={(e) => props.setBrand(e.target.value)}></input>
                    <label htmlFor="marcaAll">Toate</label><br />
                    {props.sortedNames.map((item, index) => {
                        return (
                            <div key={index} >
                                {/* <input type="radio" id={item} name="marca" value={item} onClick={() => props.brandAll(item)}></input> */}
                                <input className="buttonBrands" type="radio" id={item} name="marca" value={item} onClick={() => props.setBrand(item)}></input>
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
                    <input placeholder="Cauta..." type="search" className={styles.searchDrop} onChange={(e) => props.setSearch(e.target.value.toLowerCase())} />
                </div>

                {/* Categorie RAME-ACCESORII */}
                <div className={styles.bucatiDrop}>
                    <h4>Categorii</h4>
                    <select name="arataMobile" id="arataMobile" onChange={(e) => mobileSendAllCats(e.target.value)}>
                        <option value="ochelariVedere">Ochelari vedere</option>
                        <option value="ochelariSoare">Ochelari soare</option>
                        <option value="ochelariAccesorii">Accesorii</option>
                    </select>
                </div>

                {/* BRANDS */}
                <div className={styles.bucatiDrop} id='divBrand'>
                    <h4>Brand</h4>
                    <select name="brand" id="brandMobile" onChange={(e) => props.setBrand(e.target.value)}>
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
                        {props.brand === 'marcaAll' ? (
                            <>
                                <optgroup label='Nume'></optgroup>
                                <option value="atoz">A - Z</option>
                                <option value="ztoa">Z - A</option>
                            </>
                        ) : (

                            <>
                                <optgroup label='Nume'></optgroup>
                                <option disabled value="atoz">A - Z</option>
                                <option disabled value="ztoa">Z - A</option>
                            </>

                        )}


                    </select>
                </div>

            </div>

        </div>
    );
}

export default Sidebar;
