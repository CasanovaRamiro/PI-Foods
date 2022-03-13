import React from 'react';
// import '../css/Paginado.css'


export default function Paginado({ allRecipes, recipesPerPage, paginado }) {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div >
            {pageNumber?.map(number => (
                    <button className="button paginado-button  orange" key={number} onClick={() => paginado(number)}>{number}</button>
                ))}
            
        </div>
    )
}