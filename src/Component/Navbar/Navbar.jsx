import React from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
        <div className="navigation">
            <div className="nav-center">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="nav-left">
                           <h2>USER.DETAILS</h2>
                       </div>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                          <Link className='nav-link active' id='home-link' to={"/"}>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link active' id='about-link' to={"/about"}>About</Link>
                          </li>
                          <li className="nav-item">
                          <Link className='nav-link active' id='reg-link' to={"/contact"}>Register</Link>
                          </li> 
                        </ul>
                        <nav class="navbar">
                        <div class="container-fluid">
                          <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                        </div>
                        </nav>
                      </div>
                    </div>                  
                  </nav>
            </div>          
        </div>
    </div>
  )
}

export default Navbar
