import React from 'react'
import style from '../styles/Pagination.module.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    let pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className={style.container}>
                {pageNumbers.map(number => (
                    <button className="btn active" onClick={()=> paginate(number)} key={number}>{number}</button>
                ))}
        </div>
    )
}

export default Pagination
