import React from 'react';

function Search() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border ">
  <div className="container">
    <a className="navbar-brand " href="/"><h1>Book Store</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  
</nav>

  )
}

export default Search