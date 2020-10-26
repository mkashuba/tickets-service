import React from 'react';

import ErrorBoundry from '../error-boundry';
import PageContainer from '../pages/page-container';
import Terms from '../terms';

const TermsPage = () => {
    return (
        <ErrorBoundry>
            <PageContainer>
                <Terms />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default TermsPage;