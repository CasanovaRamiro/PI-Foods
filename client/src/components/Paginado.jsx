import React from 'react';
// import '../css/Paginado.css'


export default function Paginado({ recipes, recipesPerPage, paginado }) {
    const numbersPage = []
    console.log(Math.ceil(recipes/recipesPerPage))
    for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
        numbersPage.push(i)
    }

    return (
        <nav className='button'>
            {numbersPage && numbersPage.map(number => (
                    <button key={number} onClick={() => paginado(number)}>{number}</button>
                ))}
            
        </nav>
    )
}