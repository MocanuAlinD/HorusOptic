import React, { Component } from 'react';
import Link from 'next/link'
import style from '../styles/navbar.module.css'
import { GiEyeOfHorus } from 'react-icons/gi'
import { useState } from 'react'
import {IconButton, Badge, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {useRouter } from 'next/router'


const Navbar = ({totalItems, clr}) => {
    const [state, setState] = useState(true)
    const router = useRouter()

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
                <GiEyeOfHorus className={style.icon} />
            </div>
            <ul>
                <li><Link href='/'><a onClick={closeMenu}>Acasa</a></Link></li>
                <li><Link href='/Produse'><a onClick={() => closeMenu()}>Produse</a></Link></li>
                <li><Link href='/info'><a onClick={() => closeMenu()}>FAQ</a></Link></li>
            </ul>
            <button className={style.meniu} onClick={changeMe}>Meniu</button>
            <div className={style.divIcon}>
                {(router.pathname !== '/Cart' && router.pathname !== '/Checkout') && <Link href='/Cart'>
                    <IconButton className={style.cartIcon} aria-label='Show cart items'  >
                        <Badge badgeContent={totalItems} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Link>}
            </div>
        </div>
    );
}

export default Navbar;