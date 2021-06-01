import React, { Component } from 'react';
import style from '../styles/card1.module.css'
import Link from 'next/link'
import Arrows from './Arrows'

// Cards from index page
class Card1 extends Component {
    constructor(props){
        super(props)
        this.indexData= this.props.indexData
    }
    shorten = (text, maxLength) => {
        if (text && text.length >= maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        return text.substr(0, maxLength)
    }
    render() {
        return (
            <div className={style.cardContainer}>
                {this.indexData.map(glass=>(
                    <div key={glass.id} className={style.cards}>
                        <h3>{glass.title} 
                            <Arrows />
                        </h3>
                        <div className={style.forHide}>
                            <hr color='#cfdbd5' style={{ height: '.1rem' }} />
                            <h4>{this.shorten(glass.text, 200)}</h4>
                            <div className={style.button}><Link href={glass.url}><a>{glass.button}</a></Link></div>
                        </div>
                    </div>
                ))}
                <div className={style.mission}>
                    <h3>Misiunea noastra
                        <Arrows />
                    </h3>
                    <ul className={style.ulMission}>
                        <li>Preturi incepand de la 100 lei perechea de ochelari</li>
                        <li>Garantie 2 ani la toate produsele comercializate</li>
                        <li>Posibilitatea achitarii produselor achizitionate, in mai multe rate lunare stabilite de comun acord – <strong>FARA DOBANDA</strong></li>
                        <li>Oferirea de consultatii optometrice profesioniste gratuite indiferent daca se achizitioneaza sau nu produsele companiei.</li>
                        <li>Consultanta de specialitate cu privire la tipurile de protectie necesare pentru ochi (in functie de domeniul de activitate).</li>
                        <li>Furnizarea de produse si servicii de calitate superioara si la preturi minime.</li>
                        <li>Informarea clientilor despre afectiunile ochilor.</li>
                        <li>Informarea clientilor despre noutatile din lumea opticii medicale (tip rame, tip lentile etc).</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default Card1;