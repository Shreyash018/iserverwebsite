import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

class Navbar extends Component {
    render(){

    const LinkStyle = {
        fontWeight: 'bold',
        color: '#404243',
      };

      
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{ padding: '2px 400px', position:'fixed' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>

          <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:'40px'}}>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item d-flex align-items-center">
                <img
                  src={logo}
                  alt="logo"
                  ></img>
                <NavLink to="/" className="nav-link active" style={{ color: '#0093AF', fontWeight: 'bold' }} aria-current="page" href="/">
                I-SERVER
                </NavLink>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav" style={{marginRight:'50px'}}>
            <div className="d-flex">
              <li className="nav-item">
                <NavLink to="/services" className="nav-link" style={LinkStyle} activeClassName="active">
                SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/company" className="nav-link" style={LinkStyle} activeClassName="active">
                COMPANY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resources" className="nav-link" style={LinkStyle} activeClassName="active">
                RESOURCES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" style={LinkStyle} activeClassName="active">
                CONTACT
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
  )

}
}

export default Navbar;
