import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

import ErrorBoundry from '../error-boundry/error-boundry';
import TicketsServiceApi from '../../services/tickets-service';
import EventsPage from '../pages/events-page';
import EventDetailsPage from '../pages/event-details-page';
import ShoppingCartPage from '../pages/shopping-cart-page';
import TermsPage from '../pages/terms-page';
import PayingPage from '../pages/paying-page';


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
          <Route path='/shopping-cart' component={ShoppingCartPage} />
          <Route path='/terms' component={TermsPage} />
          <Route path='/paying' component={PayingPage} />
        </Router>
      </ErrorBoundry>

    );
  }
}