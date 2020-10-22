import React from 'react';

import './navbar.css';
import logoWhite from '../../assets/img/logo_white.svg';


const Navbar = (props) => {
    return (
        <div className="row">
            <div className="col-3 logo">
                <img className="logo__img" src={logoWhite} alt="Tickets Service Logo"/>
            </div>
            <div className="col-9 header">
                <div className="container">
                    <div className="row justify-content-between align-items-end">
                        <div className="col">
                            <span>Berlin City Hall | Events and Tickets</span>
                        </div>
                        <div className="col">
                            <ul className="social-icons d-flex justify-content-end">
                                <li><i className="fab fa-youtube"></i></li>
                                <li><i className="fab fa-facebook"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-odnoklassniki"></i></li>
                                <li><i className="fas fa-rss"></i></li>
                            </ul>
                    </div>
                    </div>
                    <div className="row justify-content-between align-items-end mt-3">
                        <div className="col-7 login-lang">
                            <span className="login">Login</span>
                            <ul className="lang">
                                <li className="lang__item">De</li>
                                <li className="lang__item active">Ru</li>
                            </ul>
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                            <span><i className="fas fa-bars burger" onClick={props.onMenu}></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;