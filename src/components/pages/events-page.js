import React from 'react';
import PageContainer from '../pages/page-container';
import EventsList from '../events-list';
import TicketsServiceApi from '../../services/tickets-service';
import ErrorBoundry from '../../components/error-boundry/error-boundry';
import {withRouter} from 'react-router-dom';

const EventsPage = ({history}) => {

    const ticketServiceApi = new TicketsServiceApi();

    const onEventClick = (eventClickId) => {
        history.push(`/event/${eventClickId}`);
    }

    return (
        <PageContainer>
            <ErrorBoundry>
                <EventsList getData={ticketServiceApi.getAllEvents} onEventClick={onEventClick} />
            </ErrorBoundry>
        </PageContainer>
    );
    
}

export default withRouter(EventsPage);