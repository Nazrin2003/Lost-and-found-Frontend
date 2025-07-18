import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/"><h2 className="text-white">LOST AND FOUND</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link text-white" to="/">Home</Link>
              <Link className="nav-link text-white" to="/add">Report Found Item</Link>
              <Link className="nav-link text-white" to="/search">Search Lost Item</Link>
              <Link className="nav-link text-white" to="/view">View Found Item</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
