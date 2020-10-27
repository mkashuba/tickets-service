import React, {Fragment} from 'react';

import './registration.css';

const Registration = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col d-flex justify-content-center">
                        <span className="main-title">Registration</span>
                    </div>
                </div>
            </div>

            {/* Container Paying */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <form className="reg-form" action="/">
                            <div className="reg-form-row">
                                <fieldset className="reg-form__address">
                                    <legend>Salutation and address</legend>
                                    <select id="male" name="male">
                                        <option value="mr">Mr</option>
                                        <option value="mrs">Mrs</option>
                                        <option value="ms">Ms</option>
                                    </select>
                                    <input type="text" placeholder="Name*" required />
                                    <input type="text" placeholder="Surname*" required />
                                    <input type="text" placeholder="Company" />
                                    <input type="text" placeholder="Street*" required />
                                    <input type="text" placeholder="House*" required />
                                    <input type="text" placeholder="Additional info" />
                                    <input type="text" placeholder="Postcode" />
                                    <input type="text" placeholder="City" />
                                    <input type="text" placeholder="Country" />
                                </fieldset>

                                <fieldset className="reg-form__contacts">
                                    <legend>Contact information</legend>
                                    <input type="email" placeholder="Email" required />
                                    <div className="pass-container"><input type="password" placeholder="Password"
                                            required /><i className="far fa-eye"></i></div>
                                    <div className="pass-container"><input type="password"
                                            placeholder="Confirm password" required /><i className="far fa-eye"></i></div>
                                    <input type="text" placeholder="Phone number" />
                                    <input type="text" placeholder="Additional phone number" />

                                    <div className="reg-form__terms">
                                        <div className="terms__container">
                                            <input type="checkbox" id="terms" name="terms" />
                                            <label for="terms">I have read the notice on <span className="data-yellow">data protection</span> and the
                                                content of the <span className="data-yellow">Standart Terms of Business</span> and agree to the storage
                                                of my personal data.</label>
                                        </div>

                                        <div className="terms__container">
                                            <input type="checkbox" id="notification" name="notification" checked />
                                            <label for="notification">I agree to get notifications on me Email and
                                                phone.</label>
                                        </div>
                                    </div>

                                </fieldset>
                            </div>

                            <button className="btn-reg" type="submit">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Registration;