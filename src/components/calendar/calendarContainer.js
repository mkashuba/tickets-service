import React, {Component} from 'react';
import Calendar from 'react-calendar';

import './calendarContainer.css';
import 'react-calendar/dist/Calendar.css';

export default class CalendarContainer extends Component {

    state = {
        date: '',
      }
     
    onChange = (date, returnValue) => {
        this.setState({ date });
        console.log(returnValue);

    }

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
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}