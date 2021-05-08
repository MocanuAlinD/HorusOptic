import React, { Component } from 'react';
import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { GiEyeOfHorus } from 'react-icons/gi'

class Navbar extends Component {
    render() {
        return (
            <div className={style.navbarContainer}>
                <div className={style.navTitle}>
                    <h3>HORUS TOP OPTIC</h3>
                    <GiEyeOfHorus size='3rem' color="#f5cb5c" />
                </div>
                <ul>
                    <li><Link href=''><a>Acasa</a></Link></li>
                    <li><Link href=''><a>Despre noi</a></Link></li>
                    <li><Link href=''><a>Consultanta</a></Link></li>
                    <li><Link href=''><a>Contact</a></Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
