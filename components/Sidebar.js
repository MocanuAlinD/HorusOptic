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
                    <input defaultChecked type="radio" id="rame" name="categorie" value="rame" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label for="rame">Rame</label><br />
                    <input type="radio" id="lentile" name="categorie" value="lentile" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label for="lentile">Lentile</label><br />
                    <input type="radio" id="accesoriiSus" name="categorie" value="accesorii" onClick={(e) => sendAllCats(e.target.value)}></input>
                    <label for="accesorii">Accesorii</label>
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

                {/* Meniu Brand RAME */}
                <div className={styles.bucati} id='brand'>
                    <h4>Brand</h4>
                    <input defaultChecked type="radio" id="marcaAll" name="marca" value="marcaAll" onClick={() => props.brandAll('marcaAll')}></input>
                    <label for="marcaAll">Toate</label><br />

                    <input type="radio" id="automan" name="marca" value="automan" onClick={() => props.brandAll('AUTOMAN')}></input>
                    <label for="costa">AUTOMAN</label><br />

                    <input type="radio" id="avanglion" name="marca" value="avanglion" onClick={() => props.brandAll('AVANGLION')}></input>
                    <label for="costa">AVANGLION</label><br />

                    <input type="radio" id="c.c.d.k." name="marca" value="c.c.d.k." onClick={() => props.brandAll('C.C.D.K')}></input>
                    <label for="costa">C.C.D.K</label><br />

                    <input type="radio" id="cadruOptic" name="marca" value="cadruOptic" onClick={() => props.brandAll('CADRU OPTIC')}></input>
                    <label for="costa">CADRU OPTIC</label><br />

                    <input type="radio" id="cardyDony" name="marca" value="cardyDony" onClick={() => props.brandAll('CARDY DONY')}></input>
                    <label for="costa">CARDY DONY</label><br />

                    <input type="radio" id="charm" name="marca" value="charm" onClick={() => props.brandAll('CHARM')}></input>
                    <label for="costa">CHARM</label><br />

                    <input type="radio" id="chiara" name="marca" value="chiara" onClick={() => props.brandAll('CHIARA')}></input>
                    <label for="costa">CHIARA</label><br />

                    <input type="radio" id="chiclamour" name="marca" value="chiclamour" onClick={() => props.brandAll('CHICLAMOUR')}></input>
                    <label for="costa">CHICLAMOUR</label><br />

                    <input type="radio" id="consul" name="marca" value="consul" onClick={() => props.brandAll('CONSUL')}></input>
                    <label for="costa">CONSUL</label><br />

                    <input type="radio" id="corrado" name="marca" value="corrado" onClick={() => props.brandAll('CORRADO')}></input>
                    <label for="costa">CORRADO</label><br />

                    <input type="radio" id="diverona" name="marca" value="diverona" onClick={() => props.brandAll('DiVERONA')}></input>
                    <label for="costa">DiVERONA</label><br />

                    <input type="radio" id="enzo" name="marca" value="enzo" onClick={() => props.brandAll('ENZO')}></input>
                    <label for="costa">ENZO</label><br />

                    <input type="radio" id="fendi" name="marca" value="fendi" onClick={() => props.brandAll('FENDI')}></input>
                    <label for="costa">FENDI</label><br />

                    <input type="radio" id="furla" name="marca" value="furla" onClick={() => props.brandAll('FURLA')}></input>
                    <label for="costa">FURLA</label><br />

                    <input type="radio" id="grosso" name="marca" value="grosso" onClick={() => props.brandAll('GROSSO')}></input>
                    <label for="costa">GROSSO</label><br />

                    <input type="radio" id="guess" name="marca" value="guess" onClick={() => props.brandAll('GUESS')}></input>
                    <label for="costa">GUESS</label><br />

                    <input type="radio" id="jacopo" name="marca" value="jacopo" onClick={() => props.brandAll('JACOPO')}></input>
                    <label for="costa">JACOPO</label><br />

                    <input type="radio" id="kind" name="marca" value="kind" onClick={() => props.brandAll('KIND')}></input>
                    <label for="costa">KIND</label><br />

                    <input type="radio" id="ledix" name="marca" value="ledix" onClick={() => props.brandAll('LEDIX')}></input>
                    <label for="costa">LEDIX</label><br />

                    <input type="radio" id="louisVuitton" name="marca" value="louisVuitton" onClick={() => props.brandAll('LOUIS VUITTON')}></input>
                    <label for="costa">LOUIS VUITTON</label><br />

                    <input type="radio" id="modernLady" name="marca" value="modernLady" onClick={() => props.brandAll('MODERN LADY')}></input>
                    <label for="costa">MODERN LADY</label><br />

                    <input type="radio" id="mystery" name="marca" value="mystery" onClick={() => props.brandAll('MYSTERY')}></input>
                    <label for="costa">MYSTERY</label><br />

                    <input type="radio" id="nexus" name="marca" value="nexus" onClick={() => props.brandAll('NEXUS')}></input>
                    <label for="costa">NEXUS</label><br />

                    <input type="radio" id="nickoo" name="marca" value="nickoo" onClick={() => props.brandAll('NICKOO')}></input>
                    <label for="costa">NICKOO</label><br />

                    <input type="radio" id="nisus" name="marca" value="nisus" onClick={() => props.brandAll('NISUS')}></input>
                    <label for="costa">NISUS</label><br />

                    <input type="radio" id="odysey" name="marca" value="odysey" onClick={() => props.brandAll('ODYSEY')}></input>
                    <label for="costa">ODYSEY</label><br />

                    <input type="radio" id="oleiss" name="marca" value="oleiss" onClick={() => props.brandAll('OLEISS')}></input>
                    <label for="costa">OLEISS</label><br />

                    <input type="radio" id="peiep" name="marca" value="peiep" onClick={() => props.brandAll('PEIEP')}></input>
                    <label for="costa">PEIEP</label><br />

                    <input type="radio" id="pobi" name="marca" value="pobi" onClick={() => props.brandAll('POBI')}></input>
                    <label for="costa">POBI</label><br />

                    <input type="radio" id="police" name="marca" value="police" onClick={() => props.brandAll('POLICE')}></input>
                    <label for="costa">POLICE</label><br />

                    <input type="radio" id="potygo" name="marca" value="potygo" onClick={() => props.brandAll('POTYGO')}></input>
                    <label for="costa">POTYGO</label><br />

                    <input type="radio" id="psse" name="marca" value="psse" onClick={() => props.brandAll('PSSE')}></input>
                    <label for="costa">PSSE</label><br />

                    <input type="radio" id="remyMartin" name="marca" value="remyMartin" onClick={() => props.brandAll('REMY MARTIN')}></input>
                    <label for="costa">REMY MARTIN</label><br />

                    <input type="radio" id="richPerson" name="marca" value="richPerson" onClick={() => props.brandAll('RICH PERSON')}></input>
                    <label for="costa">RICH PERSON</label><br />

                    <input type="radio" id="sensuelle" name="marca" value="sensuelle" onClick={() => props.brandAll('SENSUELLE')}></input>
                    <label for="costa">SENSUELLE</label><br />

                    <input type="radio" id="soneTrust" name="marca" value="soneTrust" onClick={() => props.brandAll('SONE TRUST')}></input>
                    <label for="costa">SONE TRUST</label><br />

                    <input type="radio" id="spring" name="marca" value="spring" onClick={() => props.brandAll('SPRING')}></input>
                    <label for="costa">SPRING</label><br />

                    <input type="radio" id="swarovski" name="marca" value="swarovski" onClick={() => props.brandAll('SWAROVSKI')}></input>
                    <label for="costa">SWAROVSKI</label><br />

                    <input type="radio" id="tonyMorgan" name="marca" value="tonyMorgan" onClick={() => props.brandAll('Tony Morgan')}></input>
                    <label for="costa">Tony Morgan</label><br />

                    <input type="radio" id="vintage" name="marca" value="vintage" onClick={() => props.brandAll('VINTAGE')}></input>
                    <label for="altele">VINTAGE</label> <br />

                    <input type="radio" id="vitoFabius" name="marca" value="vito fabius" onClick={() => props.brandAll('VITO FABIUS')}></input>
                    <label for="police">VITO FABIUS</label> <br />

                    <input type="radio" id="vizzini" name="marca" value="vizzini" onClick={() => props.brandAll('VIZZINI')}></input>
                    <label for="guci">VIZZINI</label><br />

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
