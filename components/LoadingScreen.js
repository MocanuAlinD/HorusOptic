import React from 'react'
import style from '../styles/LoadingScreen.module.css'

const LoadingScreen = () => {
    return (
        <div className={style.container}>
            <div className={style.loader}></div>
            <h2>Actualizare produs....</h2>
        </div>
    )
}

export default LoadingScreen

