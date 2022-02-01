import React from 'react';
import styles from '../styles/Ocupa.module.css'

const Ocupa = () => {
    return (
        <div className={styles.ocupaContainer}>
            <div className={styles.ocupaUnu}>
                <h3>HORUS TOP OPTIC OFERA SERVICII COMPLETE OPTICA MEDICALA</h3>
                <ul>
                    <li>Ne deplasam la sediul companiei dumneavoastra – GRATUIT</li>
                    <li>Consulatii oftalmologice in vederea determinarii de dioptrii -GRATUIT</li>
                    <li>Consultatiile sunt efectuate de catre specialisti in domeniu cu aparatura performanta</li>
                    <li>Mini – training de informare cu privire la tipul de protectie necesara pentru ochi ( in functie de domeniul de activitate) –GRATUIT</li>
                    <li>Punem la dispozitia angajatilor o GAMA VARIATA de rame (diverse modele)</li>
                    <li>Oferim tratamente oculare/ Ochelari de protectie cu dioptrii/ Ochelari de vedere sau de soare cu/fara dioptrii si lentile de contact.</li>
                    <li>Algerea unui model de rama optim la recomandarea si cu sprijinul consultantului nostru;</li>
                    <li>Montajul  lentilelor pe rama aleasa - GRATUIT</li>
                    <li>Livrarea ochelarilor in cel mai scurt timp sau la un termen stabilit de comun acord.</li>
                    <li>Acordarea serviciilor in regim de urgenta salariatilor care prezinta cazuri speciale de dioptrii, sau care isi motiveaza urgenta - GRATUIT</li>
                    <li>Oferim tocuri, lavete, snururi. pentru comenzile complete de ochelari ( rama si lentile ) - GRATUIT</li>
                    <li>Gama diversificata de rame la preturi accesibile</li>
                </ul>
            </div>
            <div className={styles.ocupaDoi}>
                <h3>MOBILITATE SI PROMPTITUDINE</h3>
                <ul>
                    <li>Comenzile vor fi livrate la sediul dumneavoastra de catre noi</li>
                    <li>Plata ratelor se va efectua tot la sediul dumneavoastra</li>
                    <li>Posibilitatea achitarii ochelarilor in 2/3 rate (in functie de valoarea produsului achizitionat)</li>
                    <li>Fara dobanzi sau comisioane suplimentare</li>
                    <li>Este necesara plata unui avans de 15-20% in functie de valoare produsului achizitionat</li>
                </ul>
            </div>
            <div className={styles.ocupaTrei}>
                <h3>IN  BAZA UNUI CONTRACT INCHEIAT INTRE PARTI PUTEM:</h3>
                <ul>
                    <li>Stabili o periodicitate pentru aceste actiuni</li>
                    <li>Defini grile de fidelizare ce vizeaza angajatii dumneavoastra</li>
                    <li>Cu fiecare an de colaborare, discount-ul acordat angajatilor va creste conform acordului agreat.</li>
                </ul>
            </div>
            <div className={styles.ocupaPatru}>
                <h3>Gama larga de lentile</h3>
                <ul>
                    <li>Lentile pentru corectarea vederii (monofocale, bifocale, progresive )</li>
                    <li>Lentile monitor confort</li>
                    <li>Lentile pentru condus (zi/noapte)</li>
                    <li>Lentile fotocromatice, lentile transition</li>
                    <li>Ochelari de soare</li>
                    <li>Lentile ochelari soare</li>
                    <li>Lentile de contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Ocupa;
