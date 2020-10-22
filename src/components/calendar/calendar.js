import React from 'react';

import './calendar.css';

const Calendar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-4">
                    <span className="title">Calendar</span>
                    <div className="calendar"></div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;