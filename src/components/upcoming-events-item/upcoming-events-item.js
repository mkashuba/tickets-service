import React from 'react';

import './upcoming-events-item.css';


const UpcomingEventsItem = ({item, onEventClick}) => {

    const {_id: {$oid}, artist, eventName, eventStart, images, ticketsStatus} = item;
    const eventTime = new Date(eventStart);
    const day = eventTime.getDay();
    const month = eventTime.toLocaleString('en', {'month':'long'});
    const hours = eventTime.getHours();
    const minutes = eventTime.getMinutes();

    const isSold = ticketsStatus === 'sold' ? ticketsStatus : null;

    return (
        <div className="event-card-sm" onClick={() => onEventClick($oid)}>
            <div className="event-card-sm__header">
                <img className="header__img"
                    src={images[0]} alt={eventName} />
                <span className="header__title">{artist}</span>
            </div>
            <div className="event-card-sm__data">
                <span className="date">{`${day} ${month}`}</span>
                <span className="time">{`${hours}:${minutes}`}</span>
                <span className={`status ${isSold}`}>{ticketsStatus}</span>
            </div>
        </div>
    );
}

export default UpcomingEventsItem;