import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import './shopping-cart.css';

export default class ShoppingCart extends Component {

    state = {

    }

    render() {
        return(
            <Fragment>

                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col d-flex justify-content-center">
                            <span className="main-title">Shopping Cart</span>
                        </div>
                    </div>
                </div>

                {/* Container Shopping Cart */}
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="cart-warning">The tickets shown here have now been reserved for you for 10 minutes.</div>
                            <div className="cart-info">
                                <div className="cart-info__title">Lady Gaga | The world tour 2018 | 2 January</div>
                                <div className="cart-info__del">Delete selection</div>
                                <div className="cart-info__tickets">
                                    <table className="cart-info__tickets-list">
                                        <tr>
                                            <th>Row</th>
                                            <th>Place</th>
                                        </tr>
                                        <tr>
                                            <td className="row-ticket">5</td>
                                            <td className="place-ticket">9</td>
                                            <td className="del-ticket">x</td>
                                        </tr>
                                        <tr>
                                            <td className="row-ticket">5</td>
                                            <td className="place-ticket">10</td>
                                            <td className="del-ticket">x</td>
                                        </tr>
                                        <tr>
                                            <td className="row-ticket">5</td>
                                            <td className="place-ticket">11</td>
                                            <td className="del-ticket">x</td>
                                        </tr>
                                    </table>
                                    <div className="cart-info__amount d-flex justify-content-between">
                                        <div className="amount__tickets">3 tickets</div>
                                        <div className="amount__money">$458</div>
                                    </div>
                                    <Link to='/paying' className="btn-pay">Pay</Link>
                                </div>
                                <div className="cart-info__terms-n-conditions"><input type="checkbox" /><span> I have read the <Link to='/terms'>Terms and Conditions</Link> and fully agree with them.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Shopping Cart */}
            </Fragment>
        );
    }
}