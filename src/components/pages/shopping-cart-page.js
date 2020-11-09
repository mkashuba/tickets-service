import React from 'react';
import ErrorBoundry from '../error-boundry';
import ShoppingCart from '../shopping-cart';
import PageContainer from '../pages/page-container';

const ShoppingCartPage = (props) => {

    return (
        <ErrorBoundry>
            <PageContainer>
                <ShoppingCart selectedSeats={props.location.selectedTickets} />
            </PageContainer>
        </ErrorBoundry>
    );
}

export default ShoppingCartPage;