import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import PageContainer from '../pages/page-container';
import Paying from '../paying';

export default class PayingPage extends Component {

    state = {
        payingProccess: false,
        payingSuccess: false
    }

    componentDidMount(){
        console.log("didMount in Paying Page")
    }

    componentDidUpdate(prevProps, prevState) {
        if((this.props !== prevProps) || (this.state.payingProccess !== prevState.payingProccess)){
            console.log("didUpdate in Paying Page")
            this.timer = setTimeout( () => {
                this.offPay();
            }, 5000)
        }
    }

    componentWillUnmount(){
        console.log("willUnmount in Paying Page");
        clearTimeout(this.timer);
    }

    onPay = () => {
        this.setState({
            payingProccess: true
        })
    }

    offPay = () => {
        this.setState({
            payingProccess: false,
            payingSuccess: true
        })
    }

    render() {
        if(this.state.payingSuccess) {
            return <Redirect to="/success" />
        }

        return (
            <ErrorBoundry>
                <PageContainer payingProccess={this.state.payingProccess}>
                    <Paying onPay={this.onPay}/>
                </PageContainer>
            </ErrorBoundry>
        );
    }
    
}