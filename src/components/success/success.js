import React, {Fragment} from 'react';

import './success.css';

const Success = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col d-flex justify-content-center">
                        <span className="main-title">Success</span>
                    </div>
                </div>
            </div>

            {/* Container Paying */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="cart-info without-border">
                            <div className="cart-info__title">Lady Gaga | The world tour 2018 | 2 January</div>
                            <div className="cart-info__tickets">
                                <div className="cart-info__amount d-flex justify-content-between">
                                    <div className="amount__tickets">3 tickets</div>
                                    <div className="amount__money">$458</div>
                                </div>
                            </div>
                            <div className="cart-info__success-txt">Congratulations! You've successfuly payed. Your PDF ticket have been sent to your email.</div>
                            <div className="cart-info__return-to-main">Return to the main page</div>
                            <div className="cart-info__download-ticket">Download your ticket <i className="far fa-file-pdf"></i></div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Success;