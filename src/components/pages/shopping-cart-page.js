import React from 'react';
import ErrorBoundry from '../error-boundry';
import ShoppingCart from '../shopping-cart';
import PageContainer from '../pages/page-container';

const ShoppingCartPage = () => {
    return (
        <ErrorBoundry>
            <PageContainer>
                <ShoppingCart />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default ShoppingCartPage;