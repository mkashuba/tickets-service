import React, {Component} from 'react';

import './app.css';

import EventsPage from '../pages/events-page';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ErrorBoundry from '../error-boundry/error-boundry';
import EventDetailsPage from '../pages/event-details-page';
import TicketsServiceApi from '../../services/tickets-service'


export default class App extends Component {

  ticketServiceApi = new TicketsServiceApi();

  render() {
    return (
      <ErrorBoundry>
        <Router>
          <Route path='/' exact component={EventsPage} />
          <Route path='/event/:id' exact render={({ match }) => {
            const {id} = match.params;
            console.log("Match in router id: ", id);
            return <EventDetailsPage eventId={id} />
          }}/>

        </Router>
      </ErrorBoundry>

    );
  }
}