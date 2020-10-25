import React, {Component} from 'react';
import PageContainer from '../pages/page-container';
import EventDetails from '../event-details/event-details';
import TicketsServiceApi from '../../services/tickets-service';
import ErrorBoundry from '../error-boundry/error-boundry';

export default class EventDetailsPage extends Component {

    ticketServiceApi = new TicketsServiceApi();

    render() {
        console.log("EventDetailsPage has eventId = ", this.props.eventId);
        return (
            <PageContainer>
                <ErrorBoundry>
                    <EventDetails getData={this.ticketServiceApi.getEventDetails} eventId={this.props.eventId} />
                </ErrorBoundry>
            </PageContainer>
        );
    }
    
}