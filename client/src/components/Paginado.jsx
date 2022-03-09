import React from 'react';
// import '../css/Paginado.css'


export default function Paginado({ allRecipes, recipesPerPage, paginado }) {
    const pageNumber = []
    // console.log(Math.ceil(allRecipes/recipesPerPage))
    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumber.push(i)
    }
    // console.log(allRecipes)

    return (
        <nav className='button'>
            {pageNumber?.map(number => (
                    <button key={number} onClick={() => paginado(number)}>{number}</button>
                ))}
            
        </nav>
    )
}