import React from 'react';
import styles from '../../styles/LinksFooter.module.css'

const stare = () => {
    return (
        <div className={styles.container}>
            <h3>Tipuri de lentile</h3>
            <p>De la lentile progresive de precizie și lentile speciale 
                pentru lumea digitală și conducere auto, până la lentile 
                de ochelari create special pentru purtătorii de lentile de 
                contact: scopul nostru este de a optimiza în mod continuu 
                vederea, oferind numeroase modele de lentile inovatoare și 
                soluții de la crearea lentilelor.</p>
            <ul>
                <h4>Lentilele pentru ochelari, în funcţie de materialulul din care sunt produse, se clasifică în:</h4>
                <li>Lentile din sticlă organică (plastic)
                    <ul>
                        <li>sunt cu până la 50% mai uşoare decât lentilele minerale</li>
                        <li>oferă protecţie UV</li>
                        <li>sunt rezistente la şocuri (nu se sparg)</li>
                        <li>se pot monta pe orice ramă</li>
                    </ul>
                </li>
                <li>Lentile din sticlă minerală (sticlă)
                    <ul>
                        <li>sunt recomandate pentru anumite activităţi, mai ales pentru cele care se desfăşoară la temperaturi ridicate (sudură, topitorii) sau în mediu cu mult praf (nu se zgârie)</li>
                        <li>se sparg uşor, sunt mai grele decât orice alte lentile</li>
                        <li>se pot monta doar pe rame întregi</li>
                    </ul>
                </li>
                <li>Lentilele din policarbonat
                    <ul>
                        <li>sunt rezistente la impact (recomandate pentru actvităţi sportive, copiilor, pentru un stil de viaţă activ)</li>
                        <li>sunt incasabile, sunt foarte uşoare şi elastice</li>
                        <li>sunt recomandate pentru rame cu şurub şi fir</li>
                    </ul>
                </li>
            </ul>
            <ul>
                <h4>După design, lentilele se clasifică în</h4>
                <li>Lentile cu geometrie sferică a suprafeţei (sferice)
                    <ul>
                        <li>sunt lentile standard (suprafaţa este curbată)</li>
                    </ul>
                </li>
                <li>Lentile cu geometrie asferică/dublu asferică a suprafeţelor (asferice/dublu asferice)
                    <ul>
                        <li>sunt lentile aplatizate (lentile estetice)</li>
                        <li>formează o imagine excelentă</li>
                        <li>câmp vizual mărit (aberaţii reduse la periferia lentilei)</li>
                        <li>confort vizual optim</li>
                    </ul>
                </li>
            </ul>
            <ul>
                <h4>După grosimea lentilei, există</h4>
                <li>sublentile cu indice de refracţie 1,5</li>
                <li>lentile cu indice de refracţie 1,53</li>
                <li>lentile cu indice de refracţie 1,59</li>
                <li>lentile cu indice de refracţie 1,6</li>
                <li>lentile cu indice de refracţie 1,67</li>
                <li>lentile cu indice de refracţie 1,7</li>
                <li>lentile cu indice de refracţie 1,74</li>
                <li>lentile cu indice de refracţie 1,8</li>
                <li>lentile cu indice de refracţie 1,9</li>
            </ul>
            <p>Indicele de refracţie arată grosimea lentilei, 
                cu cât este mai mare, cu atât este mai subţire lentila. 
                Lentila standard are indicele de refracţie 1,5 („lentila pentru toţi”) 
                iar cea mai subţire, pe material organic are indice 1,74 (de 3 ori mai 
                uşoară decât lentila din sticlă minerală cu indice mare). 
                Lentilele cu cel mai ridicat indice de refracţie 1,8 si 1,9 
                (cele mai subţiri lentile) sunt lentilele disponibile doar pentru 
                miopie mijlocie şi mare şi doar pe sticlă minerală.</p>
            <ul>
                <h4>După utilizare</h4>
                <li>lentile monofocale
                    <ul>
                        <li>sunt destinate corecţiei fie pentru vederea de aproape, fie pentru vederea la distanţă</li>
                    </ul>
                </li>
                <li>lentile bifocale
                    <ul>
                        <li>sunt destinate corecţiei vederii de distanţă şi aproape, cu aceeaşi lentilă</li>
                        <li>delimitarea zonei de distanţă de cea de aproape este clară, vizibilă, se numeşte lizieră</li>
                        <li>segmantul pentru aproape (citit) este confortabil, cu lungimea de 25 sau 28 mm</li>
                    </ul>
                </li>
                <li>lentile progresive de interior
                    <ul>
                        <li>sunt lentile pentru lucru şi birou, nu pot fi purtate pe stradă</li>
                        <li>asigură o vedere confortabilă atât pentru aproape cât şi pentru intermediar (până la 1,5m)</li>
                    </ul>
                </li>
                <li>lentile progresive
                    <ul>
                        <li>sunt cele mai performante lentile</li>
                        <li>asigură vedere clară la orice distanţă (există zona vederii la distanţă, la semidistanţă şi pentru vederea de aproape), fără delimitare vizibilă a acestor zone (estetice)</li>
                        <li>nu trădează vârsta purtătorului</li>
                        <li>se pot monta pe orice ramă</li>
                        <li>oferă o mare libertate de mişcare</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default stare;