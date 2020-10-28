import React from 'react';
import HallSchemes from '../hall-schemes';
import ErrorBoundry from '../error-boundry';
import PageContainer from './page-container';

const HallsSchemesPage = () => {
    return (
        <ErrorBoundry>
            <PageContainer>
                <HallSchemes />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default HallsSchemesPage;