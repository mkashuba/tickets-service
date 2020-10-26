import React, {Fragment} from 'react';

import './paying.css';

const Paying = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col d-flex justify-content-center">
                        <span className="main-title">Paying</span>
                    </div>
                </div>
            </div>

                {/* Container Paying */}
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="cart-info">
                                <div className="cart-info__title">Lady Gaga | The world tour 2018 | 2 January</div>
                                <div className="cart-info__tickets">
                                    <div className="cart-info__amount d-flex justify-content-between">
                                        <div className="amount__tickets">3 tickets</div>
                                        <div className="amount__money">$458</div>
                                    </div>
                                </div>
                                <form className="payment-methods-list">
                                    <div className="payment-method">
                                        <input type="radio" name="pm" id="" className="payment-method-radio" />
                                        <i className="fab fa-cc-paypal"></i>
                                    </div>
                                    <div className="payment-method">
                                        <input type="radio" name="pm" id="" className="payment-method-radio" />
                                        <i className="fab fa-cc-amex"></i>

                                    </div>
                                    <div className="payment-method">
                                        <input type="radio" name="pm" id="" className="payment-method-radio" />
                                        <i className="fab fa-cc-visa"></i>

                                    </div>
                                    <div className="payment-method">
                                        <input type="radio" name="pm" id="" className="payment-method-radio" />
                                        <i className="fab fa-cc-mastercard"></i>

                                    </div>
                                    <div className="payment-method">
                                        <input type="radio" name="pm" id="" className="payment-method-radio" />
                                        <i className="fab fa-cc-stripe"></i>

                                    </div>
                                    <div className="payment-method">
                                        <input type="radio" name="pm" id="" className="payment-method-radio" />
                                        <i className="fab fa-bitcoin"></i>
                                    </div>
                                </form>
                                <span onClick={props.onPay} className="btn-pay btn-in-methods justify-self-end">Pay</span>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Paying;