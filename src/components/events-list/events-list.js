import React, { Fragment, Component } from 'react';
import ErrorIndicator from '../error-indicator';
import EventsListItem from '../events-list-item';
import Spinner from '../spinner';

import './events-list.css';

export default class EventsList extends Component {

  state = {
    eventsList: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then((eventsList) => {
        this.setState({
          eventsList, 
          loading: false});
      })
      .catch(() => {
        this.setState({
          error: true, 
          loading: false})
      });
  }

  renderItem = (arr) => {
    return arr.map((item) => {
      return <EventsListItem item={item} key={item._id.$oid} onEventClick={this.props.onEventClick}/>;
    })
  }

  render() {

    if(this.state.error) {
      return <ErrorIndicator />
    }

    if(this.state.loading) {
      return <Spinner />;
    }

    const items = this.renderItem(this.state.eventsList);

    return (
      <Fragment>

        <div className="container">
          <div className="row justify-content-end">
            <div className="col-4 d-flex justify-content-center">
              <span className="main-title">Events</span>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <div className="main-title__container">
                <i className="fas fa-angle-down"></i>
                <span className="main-title__type">Concerts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            {items}
          </div>
        </div>
      </Fragment>
    );
  }

}
