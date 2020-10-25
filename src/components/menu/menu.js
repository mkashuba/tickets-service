import React from 'react';

import './menu.css';
import logoWhite from '../../assets/img/logo_white.svg';


const Menu = (props) => {
    return (
        <div className="menu-container">
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img className="logo__img" src={logoWhite} alt="mainLogo}"/>
                        </div>
                        <div className="col-4">
                            <span>Berlin City Hall | Events and Tickets</span>
                            <ul className="menu__social-icons">
                                <li><i className="fab fa-youtube"></i></li>
                                <li><i className="fab fa-facebook"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-odnoklassniki"></i></li>
                                <li><i className="fas fa-rss"></i></li>
                            </ul>
                            <div className="contacts">
                                <div className="contacts__name">Berlin City Hall</div>
                                <div className="contacts__phone">Tel.: 030 2223344</div>
                                <div className="contacts__fax">Fax: 030 2223355</div>
                                <div className="contacts__email">E-Mail: info@bch.de</div>
                            </div>
                        </div>
                        <div className="col-2 offset-md-2 align-self-center">
                            <ul className="navigation">
                                <li className="navigation_link">Login/out</li>
                                <li className="navigation_link">Events</li>
                                <li className="navigation_link">Shopping cart</li>
                                <li className="navigation_link">Halls scheme</li>
                                <li className="navigation_link">About us</li>
                            </ul>
                        </div>
                        <div className="col-1 d-flex justify-content-end">
                            <i className="fas fa-times close-icon" onClick={props.onClose}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    );
}

export default Menu;