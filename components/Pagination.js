import React from 'react'
import style from '../styles/Pagination.module.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, changeShow }) => {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className={style.container}>
            
                <div className={style.pickToShow}>
                    <label>Afiseaza</label>
                    <select onChange={(e) => changeShow(e.target.value)}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='50'>50</option>
                    </select>
                </div>
                    
            
            {pageNumbers.map(number => (
                <button className='btn' onClick={(e) => paginate(e, number)} key={number}>{number}</button>
            ))}

            <style jsx>{`
                .btn {
                    background: #242424;
                    border: none;
                    border-bottom: 1px solid #f5cb5c;
                    border-radius: .3rem .3rem 0 0;
                    color: #f5cb5c;
                    cursor: pointer;
                    font-size: .75rem;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 400;
                    margin-right: .4rem;
                    margin-top: .4rem;
                    width: 1.5rem;
                    outline: none;
                    padding: 0 .2rem;
                    text-decoration: none;
                    }
                .active{
                    background: #f5cb5c;
                    color: #242424;
                }
                .btn:hover{
                    background: #f5cb5c;
                    color: #242424;
                }
            `}</style>

                    </div>
                        )
}

                        export default Pagination
