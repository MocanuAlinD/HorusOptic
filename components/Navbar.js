import React, { Component } from 'react';
import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { GiEyeOfHorus } from 'react-icons/gi'
import { useState } from 'react'
import {IconButton, Badge, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {useRouter } from 'next/router'


const Navbar = ({totalItems}) => {
    console.log('Navbar: ', totalItems)
    const [state, setState] = useState(true)
    const location = useRouter()
    
    const changeMe = () => {
        let a = document.querySelector("ul")
        if (state) {
            setState(false)
            a.style.right = "0"
        } else {
            setState(true)
            a.style.right = "-100%"
        }
    }

    const closeMenu = () => {
        let a = document.querySelector("ul")
        a.style.right = "-100%"
        setState(true)
    }

    return (
        <div className={style.navbarContainer}>
            <div className={style.navTitle}>
                <h3>HORUS TOP OPTIC</h3>
                <GiEyeOfHorus size='3rem' color="#f5cb5c" className={style.icon} />
            </div>
            <ul className={style.ul}>
                <li><Link href='/'><a onClick={closeMenu}>Acasa</a></Link></li>
                <li><Link href='/Produse'><a onClick={() => closeMenu()}>Produse</a></Link></li>
                {/* <li><Link href='./despre'><a onClick={closeMenu}>Despre noi</a></Link></li> */}
                <li><Link href='/info'><a onClick={() => closeMenu()}>?</a></Link></li>
            </ul>
            <button className={style.meniu} onClick={changeMe}>Meniu</button>
            {location.pathname !== '/Cart' && <Link href='/Cart'>
                <IconButton aria-label='Show cart items' style={{ color: "#f5cb5c" }} >
                    <Badge badgeContent={totalItems} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Link>}
        </div>
    );
}

export default Navbar;
















/*
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.status = false
    }
    changeMe() {
        let a = document.querySelector("ul")
        console.log(this.status)
        if (a.style.transform == "translate(0px)") {
            a.style.transform = "translate(30px)"
        } else {
            a.style.transform = "translate(-30px)"
        }

    }
    render() {
        return (
            <div className={style.navbarContainer}>
                <div className={style.navTitle}>
                    <h3>HORUS TOP OPTIC</h3>
                    <GiEyeOfHorus size='3rem' color="#f5cb5c" />
                </div>
                <ul className={style.ul}>
                    <li><Link href=''><a>Acasa</a></Link></li>
                    <li><Link href=''><a>Despre noi</a></Link></li>
                    <li><Link href=''><a>Consultanta</a></Link></li>
                    <li><Link href=''><a>Contact</a></Link></li>
                </ul>
                <button className={style.meniu} onClick={this.changeMe}>Meniu</button>
            </div>
        );
    }
}
*/

// export default Navbar;
