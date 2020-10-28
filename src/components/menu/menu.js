import React from 'react';

import './menu.css';
import logoWhite from '../../assets/img/logo_white.svg';

import {Link} from 'react-router-dom';


const Menu = (props) => {
    return (
        <div className="menu-container">
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Link to='/'><img className="logo__img" src={logoWhite} alt="mainLogo}"/></Link>
                        </div>
                        <div className="col-4">
                            <span>Berlin City Hall | Events and Tickets</span>
                            <ul className="menu__social-icons">
                                <li><Link to='//youtube.com' target='_blank'><i className="fab fa-youtube"></i></Link></li>
                                <li><Link to='//facebook.com' target='_blank'><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to='//twitter.com' target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to='//instagram.com' target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to='//odnoklassniki.ru' target='_blank'><i className="fab fa-odnoklassniki"></i></Link></li>
                                <li><Link to='/' target='_blank'><i className="fas fa-rss"></i></Link></li>
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
                                <Link to='/login'><li className="navigation_link">Login/out</li></Link>
                                <Link to='/'><li className="navigation_link">Events</li></Link>
                                <Link to='/shopping-cart'><li className="navigation_link">Shopping cart</li></Link>
                                <Link to='/halls-schemes'><li className="navigation_link">Halls scheme</li></Link>
                                <Link to='/'><li className="navigation_link">About us</li></Link>
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