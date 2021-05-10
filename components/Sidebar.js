import React from 'react';
import styles from '../styles/Sidebar.module.css'
// import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
// import { BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi'

const Sidebar = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.bucati}>
                <h4>Brand:</h4>
                <input type="radio" id="toate" name="marca" value="toate" onClick={() => props.changeCat('all')}></input>
                <label for="toate">Toate</label><br />
                <input type="radio" id="guci" name="marca" value="guci" onClick={() => props.changeCat('Guci')}></input>
                <label for="guci">Guci</label><br />
                <input type="radio" id="police" name="marca" value="police" onClick={() => props.changeCat('Police')}></input>
                <label for="police">Police</label> <br />
                <input type="radio" id="altele" name="marca" value="altele" onClick={() => props.changeCat('Arnette')}></input>
                <label for="altele">Arnette</label> <br />
                <input type="radio" id="costa" name="marca" value="costa" onClick={() => props.changeCat('Costa')}></input>
                <label for="costa">Costa</label>
            </div>
            <div className={styles.bucati}>
                <h4>Pret</h4>
                <input type="radio" id="mic" name="pret" value="mic"></input>
                <label for="mic">Mic</label> <br />
                <input type="radio" id="mare" name="pret" value="mare"></input>
                <label for="mare">Mare</label>
            </div>
            <div className={styles.bucati}>
                <h4>Nume</h4>
                <input type="radio" id="atoz" name="nume" value="atoz"></input>
                <label for="atoz">A - Z</label> <br />
                <input type="radio" id="ztoa" name="nume" value="ztoa"></input>
                <label for="ztoa">Z - A</label>
            </div>
            <div className={styles.bucatiDropdown}>
                <h4>Brand</h4>
                <select name="marca" id="marca" onChange={(e) => props.changeCat(e.target.value)}>
                    <option value="all" selected>Toate</option>
                    <option value="Guci">Guci</option>
                    <option value="Police">Police</option>
                    <option value="Arnette">Arnette</option>
                    <option value="Costa">Costa</option>
                </select>
            </div>
            <div className={styles.bucatiDropdown}>
                <h4>Pret</h4>
                <select name="pret" id="pret">
                    <option value="mic" selected>Mic</option>
                    <option value="mare">Mare</option>
                </select>
            </div>
            <div className={styles.bucatiDropdown}>
                <h4>Nume</h4>
                <select name="nume" id="nume">
                    <option value="atoz" selected>A - Z</option>
                    <option value="ztoa">Z - A</option>
                </select>
            </div>
            
        </div>
    );
}

export default Sidebar;
