import React from 'react';

import ErrorBoundry from '../error-boundry';
import PageContainer from './page-container';
import Login from '../login';

const LoginPage = () => {
    return (
        <ErrorBoundry>
            <PageContainer>
                <Login />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default LoginPage;