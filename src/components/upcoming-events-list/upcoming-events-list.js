import React, {Component} from 'react';
import UpcomingEventsItem from '../upcoming-events-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class UpcomingEventsList extends Component {

    state = {
        upcomingEventsList: [],
        loading: true,
        error: false
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((upcomingEventsList) => {
                this.setState({
                    upcomingEventsList,
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true
                })
            });
    }

    renderItems = (arr) => {

        let resArray = [];
        let count = 3;
        for(let i = 0; i < count; i++) {
            resArray.push(<UpcomingEventsItem item={arr[i]} key={arr[i]._id.$oid} onEventClick={this.props.onEventClick}/>);
        }

        return resArray;

    }

    render() {

        if(this.state.error) {
            return <ErrorIndicator />
          }
      
        if(this.state.loading) {
            return <Spinner />;
        }

        const items = this.renderItems(this.state.upcomingEventsList);

        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <span className="title">Upcoming events</span>

                        <div className="events-list">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}