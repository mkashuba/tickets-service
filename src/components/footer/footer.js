import React from 'react';

import './footer.css';
import logoColor from '../../assets/img/logo_col.svg';


const Footer = () => {
    return (
        <div className="container footer">
            <div className="row mt-4 mb-4">
                <div className="col d-flex align-items-end">
                    <div className="footer__logo">
                        <img src={logoColor} alt="Tickets Service Logo" className="footer__logo-img" />
                    </div>
                    <div className="footer__address">
                        <div className="footer__address-title">Berlin City Hall</div>
                        <div className="footer__address-address">Freudstrasse 69, 10117 Berlin</div>
                        <div className="footer__address-phone">Tel.: 030 2223344</div>
                    </div>
                </div>
                <div className="col d-flex justify-content-end align-items-end">
                    <div className="footer__contacts">
                        <div className="footer__contscts-fax">Fax: 030 2223355</div>
                        <div className="footer__contacts-email">Email: info@bch.de</div>
                        <div className="footer__contacts-social-icons">
                            <li><i className="fab fa-youtube"></i></li>
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-odnoklassniki"></i></li>
                            <li><i className="fas fa-rss"></i></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;