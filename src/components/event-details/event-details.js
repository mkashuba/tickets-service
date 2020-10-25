import React, {Component, Fragment } from 'react';

import './event-details.css';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

export default class EventDetails extends Component {

    constructor() {
        super();
        console.log("Constructor")
    }

    state ={
        eventDetails: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateDetails();
    }

    componentDidUpdate(prevProps) {
        console.log("Compare update: ");
        if(this.props.eventId !== prevProps.eventId) {
            this.setState({loading: true})
            this.updateDetails();
        }
    }

    updateDetails() {
        const {getData, eventId} = this.props;

        getData(eventId)
            .then((eventDetails) => {
                this.setState({
                    eventDetails,
                    loading: false,
                    error: false
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true
                })
            });
    }


    render() {
        const {eventDetails, loading, error} = this.state;
        console.log("Error is: ", error);
        console.log("Render event details: ", eventDetails);


        if(loading) {
            return <Spinner />;
        }

        if(error) {
            return <ErrorIndicator />;
        }

        const range = eventDetails.priceRanges;
        const startPrice = range[range.length-1].price;
        const endPrice = range[0].price;

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

                    {/* Event Detail */}
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="event-detail__logo">
                                <img src={eventDetails.images[0]}
                                    alt="" className="detail-logo__img" />
                                <div className="title-container">
                                    <div className="detail-logo__title">{eventDetails.artist}</div>
                                    <div className="detail-logo__subtitle">{eventDetails.eventName}</div>
                                </div>
        
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="event-detail__data">
                                <div className="detail-data__title">{eventDetails.artist}</div>
                                <div className="detail-data__desc">{eventDetails.description}</div>
                                <div className="detail-data__container">
                                    <div className="detail-data__date">Date: <span className="data-yellow">{eventDetails.eventStart}</span> <i className="far fa-clock"></i> 18:00</div>
                                    <div className="detail-data__tickets">Tickets available - <span className="data-yellow">{eventDetails.ticketsAmount - eventDetails.ticketsSold}</span></div>
                                    <div className="detail-data__price">Price range: <span className="data-yellow">{startPrice} - {endPrice}</span></div>
                                </div>
                                <span className="buy-tickets">Buy Tickets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}