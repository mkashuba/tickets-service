import React, {Component} from 'react';

import UpcomingEventsList from '../upcoming-events-list/upcoming-events-list';
import Menu from '../menu';
import Navbar from '../navbar';
import Calendar from '../calendar';
import Footer from '../footer';
import ErrorBoundry from '../error-boundry/error-boundry';
import TicketsServiceApi from '../../services/tickets-service';
import {withRouter} from 'react-router-dom';
import BlurBg from '../blur-bg/blur-bg';


class PageContainer extends Component {

  ticketServiceApi = new TicketsServiceApi();

  state = {
      eventClickId: null,
      menu: false,
      payingProccess: false
  }

  componentDidMount() {
    this.showScroll();
    console.log("Did Mount in Page Container")
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props !== prevProps) || (this.state !== prevState)) {
      if(this.state.menu) {
        this.hideScroll();
      } else {
        this.showScroll();
      }
    }

    // if((this.props.payingProccess !== prevProps.payingProccess) || 
    //     (this.state.payingProccess !== prevState.payingProccess)) {
    //   if(this.state.payingProccess) {
    //     this.showPayingProccess();
    //   } else {
    //     this.hidePaingProccess();
    //   }
    // }

  }

  hideScroll() {
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }

  showScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  onEventClick = (eventClickId) => {
    console.log("Pressed on ", eventClickId);
    const {history} = this.props;
    history.push(`/event/${eventClickId}`);
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

    const isMenuShow = this.state.menu ? <Menu onClose={this.onMenuClose}/> : null;
    const isPayingProccess = this.props.payingProccess ? <BlurBg /> : null;

    return (
      <ErrorBoundry>
        <div className="top-background"></div>
        {isMenuShow}    
        <div className="container">
            <Navbar onMenu={this.onMenuOpen}/>
        </div>
        
        <div className="container">
            <div className="row bg-content">
            {isPayingProccess}
    
              <div className="col-3">
                  <Calendar />
                  <ErrorBoundry><UpcomingEventsList getData={this.ticketServiceApi.getAllEvents} onEventClick={this.onEventClick} /></ErrorBoundry>
              </div>
              <div className="col-9">
                  {this.props.children}
                  <Footer />
              </div>
            
            </div>
        </div>
      </ErrorBoundry>
    );
  }
}

export default withRouter(PageContainer);