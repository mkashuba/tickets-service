import React, {Component} from 'react';

import './events-list-item.css';

export default class EventsListItem extends Component {


    render() {

        const {_id: {$oid}, artist, eventName, eventStart, images} = this.props.item;

        const date = new Date(eventStart);
        const dateEvent = `${date.getDay()} ${date.toLocaleString("en", { month: "long" })}`;

        return (
            <div className="col-md-6 pr-0">
                <div className="list-event-item"
                onClick={() => this.props.onEventClick($oid)}>
                    <img className="img"
                        src={images[0]} alt={eventName}/>
                    <div className="list-event-item__date">{dateEvent}</div>
                    <div className="title-container">
                        <div className="list-event-item__title">{artist}</div>
                        <div className="list-event-item__subtitle">{eventName}</div>
                    </div>
                </div>
            </div>
        );
    }    
}