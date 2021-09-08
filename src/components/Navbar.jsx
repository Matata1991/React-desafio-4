import React from 'react'
import { CartWidget } from './CartWidget'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">              
                <a class="navbar-brand" href="https://www.ratablanca.com.ar/">
                <img src="/humildad.svg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                    La humildad
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="navbar-nav">
                        <a className="nav-link" href="https://www.ratablanca.com.ar/">Home</a>
                        <a className="nav-link" href="https://www.ratablanca.com.ar/">Tortas</a>
                        <a className="nav-link" href="https://www.ratablanca.com.ar/">Sandwiches</a>
                        <a className="nav-link" href="https://www.ratablanca.com.ar/">Catering</a>
                        <a className="nav-link" href="https://www.ratablanca.com.ar/">Contacto</a>
                    </div>    
                </div>  
                <CartWidget />         
        </nav>
        </>
    )
}

export default Navbar
