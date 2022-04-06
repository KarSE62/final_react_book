import React from 'react'

function Detail({thumbnailUrl,title,isbn,pageCount,longDescription,categories,status,authors}) {
  return (
    <div className="card" style={{width: '30rem'}}>
  <img src={thumbnailUrl} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 class="card-title">{title}</h5>
  <h5 class="card-title">{isbn}</h5>
  <p className="card-text">categories : {categories}</p>
  <p className="card-text">status : {status}</p>
  <p className="card-text">pageCount : {pageCount}</p>
  <p className="card-text">authors : {authors}</p>
  <p className="card-text">{longDescription}</p>
  </div>
</div>

  )
}

export default Detail