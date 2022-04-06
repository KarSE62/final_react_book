import React from 'react'
import { Link } from "react-router-dom";

function Book({ title, thumbnailUrl, categories, isbn,shortDescription,authors ,pageCount,publishedDate}) {
    return (
        
        <div className="card" style={{ width: '20rem' }}>
            <Link to={`/Detail/${isbn}`}>
                 <img src={thumbnailUrl} className="card-img-top" alt="..." />
                    <span>NumberBook : {isbn}</span>
                </Link>
           
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">categories : {categories}</p>
                <p className="card-text">authors : {authors}</p>
                <p className="card-text">pageCount : {pageCount}</p>
                <p className="card-text">{shortDescription}</p>
            </div>
        </div>
    )
}

export default Book