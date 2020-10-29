import React, {Component} from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './calendarContainer.css';


export default class CalendarContainer extends Component {

    state = {
        date: '',
      }
     
    onChange = (date, returnValue) => {
        this.setState({ date });
        console.log(returnValue);
    }

    formatWeekday = (locale,value) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value.getDay()]

    formatLabel = ({ date, label, locale, view }) => `${date.toLocaleDateString("en-US", {month: "long"})} '${date.toLocaleDateString("en-US", {year: "2-digit"})}`

    render(){
        console.log("State: data - ", this.state.date);
        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <span className="title">Calendar</span>
                        <div className="calendar">
                        <Calendar
                            onChange={this.onChange}
                            onClickDay={(value, event) => console.log('Clicked day: ', value)}
                            selectRange
                            value={this.state.date}
                            next2Label={null}
                            prev2Label={null}
                            className="custom-style"
                            calendarType='Hebrew'
                            locale="En"
                            formatShortWeekday={this.formatWeekday}
                            navigationLabel={this.formatLabel}
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}