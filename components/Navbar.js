import React from "react";
import Link from "next/link";
import style from "../styles/navbar.module.css";
import { GiEyeOfHorus } from "react-icons/gi";
import { BiSun, BiMoon } from "react-icons/bi";
import { MdBrightnessMedium } from "react-icons/md";
import { useState } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = ({ totalItems }) => {
  const [state, setState] = useState(true);
  const [themeIcon, setThemeIcon] = useState(true);
  const router = useRouter();

  const { data: session } = useSession();

  const changeMe = () => {
    let a = document.querySelector("ul");
    if (state) {
      a.style.right = "0";
      setState(false);
    } else {
      a.style.right = "-100%";
      setState(true);
    }
  };

  const closeMenu = () => {
    let a = document.querySelector("ul");
    a.style.right = "-100%";
    setState(true);
  };

  const changeTheme = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      setThemeIcon(false);
    } else {
      setThemeIcon(true);
    }
  };

  const alin = () =>{
    console.log('alin function')
    signOut()
    closeMenu()
  }

  return (
    <div className={style.nav} id="nav">
      <div className={style.nav__title}>
        <h3>HORUS TOP OPTIC</h3>
        {/* <GiEyeOfHorus className={style.nav__icon} /> */}
      </div>
      <ul>
        <li>
          <Link href="/">
            <a onClick={closeMenu}>Acasa</a>
          </Link>
        </li>
        <li>
          <Link href="/Produse">
            <a onClick={closeMenu}>Produse</a>
          </Link>
        </li>
        <li>
          <Link href="/info">
            <a onClick={closeMenu}>FAQ</a>
          </Link>
        </li>

        {session && (
          <li>
            <img src={session.user.image} alt="" />
            <Link href="/">
              <a onClick={()=> (signOut(), closeMenu())}>Sign out</a>
            </Link>
          </li>
        )}
        {!session && (
          <li>
            <Link href="/recenzii">
              <a onClick={closeMenu}>Sign in</a>
            </Link>
          </li>
        )}
      </ul>
      <button className={style.nav__menu} onClick={changeMe}>
        Meniu
      </button>
      <div className={style.nav__cartContainer}>
        {router.pathname !== "/Cart" && router.pathname !== "/Checkout" && (
          <Link href="/Cart">
            <IconButton
              className={style.nav__cartIcon}
              aria-label="Show cart items"
              title="Vezi produsele din cos"
            >
              <Badge
                badgeContent={totalItems}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        )}
      </div>

      <div
        className={style.theme_color_container}
        onClick={() => changeTheme()}
      >
        <div className={style.sun}>
          {themeIcon === true ? (
            <BiSun className={style.sunIcon} />
          ) : (
            <BiMoon className={style.sunIcon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
