import React from 'react';

import ErrorBoundry from '../error-boundry';
import PageContainer from '../pages/page-container';
import Registration from '../registration';

const RegistrationPage = () => {
    return(
        <ErrorBoundry>
            <PageContainer>
                <Registration />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default RegistrationPage;