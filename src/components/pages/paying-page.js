import React, {Component} from 'react';

import ErrorBoundry from '../error-boundry';
import PageContainer from '../pages/page-container';
import Paying from '../paying';

export default class PayingPage extends Component {

    state = {
        payingProccess: false
    }

    onPay = () => {
        this.setState({
            payingProccess: true
        })
    }

    render() {
        return (
        <ErrorBoundry>
            <PageContainer payingProccess={this.state.payingProccess}>
                <Paying onPay={this.onPay}/>
            </PageContainer>
        </ErrorBoundry>
    );
    }
    
}