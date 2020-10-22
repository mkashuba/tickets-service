import React, {Fragment, Component} from 'react';

import './app.css';
import UpcomingEventsList from '../upcoming-events-list/upcoming-events-list';
import TicketsServiceApi from '../../services/tickets-service';
import Menu from '../menu';
import Navbar from '../navbar';
import Calendar from '../calendar';
import Footer from '../footer';
import EventsList from '../events-list';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class App extends Component {

  ticketServiceApi = new TicketsServiceApi();

  state = {
    eventClickId: null,
    menu: false
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props !== prevProps) || (this.state !== prevState)) {
      if(this.state.menu) {
        const documentWidth = document.documentElement.clientWidth;
        const windowWidth = window.innerWidth;
        const scrollBarWidth = windowWidth - documentWidth;

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;

      } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

      }
    }
  }

  onEventClick = (eventClickId) => {
    console.log("Pressed on ", eventClickId);
  }
  
  onMenuOpen = () => {
    this.setState({
      menu: true
    })
  }

  onMenuClose = () => {
    this.setState({
      menu: false
    })
  }

  render() {

    console.log(this.state.eventClickId)

        
    const isMenuShow = this.state.menu ? <Menu onClose={this.onMenuClose}/> : null;

    return (
      <Fragment>
        <ErrorBoundry>
          <div className="top-background"></div>
          {isMenuShow}    
          <div className="container">
            <Navbar onMenu={this.onMenuOpen}/>
          </div>
          
          <div className="container">
            <div className="row bg-content">
    
              <div className="col-3">
                <Calendar />
                <UpcomingEventsList getData={this.ticketServiceApi.getAllEvents} onEventClick={this.onEventClick} />
              </div>
              <div className="col-9">
                <ErrorBoundry>
                  <EventsList getData={this.ticketServiceApi.getAllEvents} onEventClick={this.onEventClick} />
                </ErrorBoundry>
                <Footer />
              </div>
              
            </div>
          </div>
        </ErrorBoundry>
      </Fragment>
    );
  }
}