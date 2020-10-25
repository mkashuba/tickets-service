import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        console.log("hasError in ErrorBoundry is: ", this.state.hasError);
        return this.state.hasError ? <ErrorIndicator /> : this.props.children;
    }
}