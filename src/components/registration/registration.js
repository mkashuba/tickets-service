import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import ConfirmCode from '../confirm-code/confirm-code';
import TicketsServiceApi from '../../services/tickets-service';
import Spinner from '../spinner';

import './registration.css';

export default class Registration extends Component {

    state = {
        male: 'mr',
        name: '',
        surname: '',
        company: '',
        street: '',
        house: '',
        addinfo: '',
        postcode: '',
        city: '',
        country: '',
        notification: true,
        terms: false,
        email: '',
        password: '',
        confirmpassword: '',
        phone: '',
        addphone: '',
        confirmview: false,
        loading: false,
        error: false

    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        });
    }

    onRegisterClick = (e) => {
        e.preventDefault();
        if(this.state.terms) {
            this.setState({loading: true})

            const ticketsServiceApi = new TicketsServiceApi();
            ticketsServiceApi
                .setUser(this.createNewUser())
                .then((message) => {
                    if(message._id) {
                        this.setState({
                            confirmview: true,
                            loading: false
                        })
                    }
                })
                .catch();

        } else {
            alert('Please apply Terms and Conditionals');
        }
    }

    createNewUser = () => {
        return this.state;
    }

    render(){

        const confirmView = this.state.confirmview ? <ConfirmCode /> : null;

        if(this.state.loading){
            return <Spinner />;
        }

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

                            {confirmView}

                            <form className="reg-form" onSubmit={this.onRegisterClick}>
                                <div className="reg-form-row">
                                    <fieldset className="reg-form__address">
                                        <legend>Salutation and address</legend>
                                        <select id="male" name="male" value={this.state.value} onChange={this.handleInputChange}>
                                            <option value="mr">Mr</option>
                                            <option value="mrs">Mrs</option>
                                            <option value="ms">Ms</option>
                                        </select>
                                        <input name="name" onChange={this.handleInputChange} value={this.state.name} type="text" placeholder="Name*" required />
                                        <input name="surname" onChange={this.handleInputChange} value={this.state.surname} type="text" placeholder="Surname*" required />
                                        <input name="company" onChange={this.handleInputChange} value={this.state.company} type="text" placeholder="Company" />
                                        <input name="street" onChange={this.handleInputChange} value={this.state.street} type="text" placeholder="Street*" required />
                                        <input name="house" onChange={this.handleInputChange} value={this.state.house} type="text" placeholder="House*" required />
                                        <input name="addinfo" onChange={this.handleInputChange} value={this.state.addinfo} type="text" placeholder="Additional info" />
                                        <input name="postcode" onChange={this.handleInputChange} value={this.state.postcode} type="text" placeholder="Postcode" />
                                        <input name="city" onChange={this.handleInputChange} value={this.state.city} type="text" placeholder="City" />
                                        <input name="country" onChange={this.handleInputChange} value={this.state.country} type="text" placeholder="Country" />
                                    </fieldset>
    
                                    <fieldset className="reg-form__contacts">
                                        <legend>Contact information</legend>
                                        <input name="email" onChange={this.handleInputChange} value={this.state.email} type="email" placeholder="Email" required />
                                        <div className="pass-container"><input name="password" onChange={this.handleInputChange} value={this.state.password} type="password" placeholder="Password"
                                                required /><i className="far fa-eye"></i></div>
                                        <div className="pass-container"><input name="confirmpassword" onChange={this.handleInputChange} value={this.state.confirmpassword} type="password"
                                                placeholder="Confirm password" required /><i className="far fa-eye"></i></div>
                                        <input name="phone" onChange={this.handleInputChange} value={this.state.phone} type="text" placeholder="Phone number" />
                                        <input name="addphone" onChange={this.handleInputChange} value={this.state.addphone} type="text" placeholder="Additional phone number" />
    
                                        <div className="reg-form__terms">
                                            <div className="terms__container">
                                                <input type="checkbox" id="terms" name="terms" checked={this.state.terms} onChange={this.handleInputChange} />
                                                <label htmlFor="terms">I have read the notice on <span className="data-yellow">data protection</span> and the
                                                    content of the <span className="data-yellow">Standart Terms of Business</span> and agree to the storage
                                                    of my personal data.</label>
                                            </div>
    
                                            <div className="terms__container">
                                                <input type="checkbox" id="notification" name="notification" checked={this.state.notification} onChange={this.handleInputChange} />
                                                <label htmlFor="notification">I agree to get notifications on me Email and
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
    
}
