import React from 'react';
import styles from '../styles/Consultanta.module.css'

const Consultanta = () => {
    return (
        <div className={styles.consultanta__container}>
            <h3>ADEVAR, SERIOZITATE, PROMPTITUDINE, VARIETATE, DIN RESPECT PENTRU DUMNEAVOASTRA</h3>
            <ul>
                <li>Consultatii gratuite</li>
                <li>Toc, laveta si snur gratuit</li>
                <li>Rame si lentile ochelari la preturi avantajoase</li>
                <li>Montaj gratuit</li>
                <li>Montaj lentile si pe ramele dumneavoastra</li>
                <li>Garantie rame si lentile</li>
                <li>Este posibila si plata in rate</li>
                <li>Pentru cei care nu sunteti din Constanta daca aveti prescriptia cu dioptriile livram ochelarii prin curier sau posta</li>
                <li>Livram oriunde in tara, livrare prompta</li>
                <li>Daca nu sunteti din Constanta oferim consultanta online si telefonica in alegerea ramei si a lentilelor potrivite dumneavoastra</li>
                <li>Avem peste 700 modele de rame ochelari</li>
            </ul>
        </div>
    );
}

export default Consultanta;
