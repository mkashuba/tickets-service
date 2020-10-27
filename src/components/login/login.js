import React, { Fragment } from 'react';

import './login.css';

const Login = () => {
    return(
        <Fragment>
            <div className="container">
                    <div className="row justify-content-end">
                        <div className="col d-flex justify-content-center">
                            <span className="main-title">Registration</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="reg-title">I am already a customer</div>
                            <form action="/" className="login-form">
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />
                                <div className="forgot-pass">Forgot a password?</div>
                                <button type="submit" className="btn-login">Login</button>
                            </form>
                        </div>
                        <div className="col">
                            <div className="reg-title">New customer</div>
                            <button type="button" className="btn-login">Register</button>
                            <button type="button" className="btn-login">Login with invitation code</button>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Login;