import React, { Component } from 'react';
import style from '../styles/card1.module.css'

class Card1 extends Component {
    constructor(props){
        super(props)
        this.indexData= this.props.indexData
    }
    shorten = (text, maxLength) => {
        if (text && text.length >= maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        return text.substr(0, maxLength)
    }
    render() {
        return (
            <div className={style.cardContainer}>
                {this.indexData.map(glass=>(
                    <div key={glass.id} className={style.cards}>
                        <h3>{glass.title}</h3>
                        <hr color='#cfdbd5' style={{height:'.1rem'}}/>
                        <h4>{this.shorten(glass.text, 200)}</h4>
                        <div className={style.button}><button>{glass.button}</button></div>
                        
                    </div>
                    
                ))}
            </div>
        );
    }
}

export default Card1;