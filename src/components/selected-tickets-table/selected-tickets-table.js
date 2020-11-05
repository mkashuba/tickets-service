import React, {Component, Fragment} from 'react';

import './selected-tickets-table.css';


const Ticket = ({row, place}) => {
    return (
        <tr>
            <td className="row-ticket">{row}</td>
            <td className="place-ticket">{place}</td>
            <td className="del-ticket">x</td>
        </tr>
    );
}

class Prices extends Component {

    state = {
        priceRanges: []
    }

    componentDidMount() {
        this.setState({
            priceRanges: this.props.priceRanges
        })
    }

    getPriceList = (priceRanges) => {
        return priceRanges.map((item, i) => {
            return <div key={i} className="range" style={{backgroundColor: `${item.color}`}}>{`$${item.price}.00`}</div>;
        })
    }

    render() {

        const priceList = this.getPriceList(this.state.priceRanges);

        return (
            <div className="tickets-info-area__prices">
                <div className="prices__title">Price range:</div>
                <div className="prices__range">
                    {priceList}
                </div>
            </div>
        );
    }
}
    

const SelectedTicketsTable = ({priceRanges, selectedSeats}) => {

    const tickets = selectedSeats.map((item) => {
        return <Ticket row={item.row} place={item.seat} />;
    })

    return (
        <div className="tickets-info-area">
            <Prices priceRanges={priceRanges} />
            <div className="tickets-info-area__tickets">
                <table className="tickets-info-area__tickets-list">
                    <tbody>
                        <tr>
                            <th>Row</th>
                            <th>Place</th>
                        </tr>
                        {tickets}
                    </tbody>
                </table>
                <div className="tickets-info-area__amount d-flex justify-content-between">
                    <div className="amount__tickets">3 tickets</div>
                    <div className="amount__money">$458</div>
                </div>
                <a href="#" className="btn-to-card">To the cart</a>
            </div>
        </div>
    );
}

export default SelectedTicketsTable;