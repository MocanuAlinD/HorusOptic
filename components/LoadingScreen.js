import React from 'react'
import style from '../styles/LoadingScreen.module.css'

const LoadingScreen = ({actualizare}) => {
    return (
      <div className={style.loadingScreen__container}>
        <div className={style.loadingScreen__container__loader}></div>
        <h2>{actualizare}</h2>
      </div>
    );
}

export default LoadingScreen

