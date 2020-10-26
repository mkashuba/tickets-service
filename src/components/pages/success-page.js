import React from 'react';

import ErrorBoundry from '../error-boundry';
import PageContainer from '../pages/page-container';
import Success from '../success';

const SuccessPage = () => {
    return (
        <ErrorBoundry>
            <PageContainer>
                <Success />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default SuccessPage;