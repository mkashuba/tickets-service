import React, {Component, Fragment} from 'react';

import './selected-tickets-table.css';


const Ticket = ({row, place, side, onDeleteSelectedSeat}) => {
    return (
        <tr>
            <td className="row-ticket">{row}</td>
            <td className="place-ticket">{place}{side}</td>
            <td className="del-ticket" onClick={() => {onDeleteSelectedSeat(row, place, side)}}>x</td>
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
    

const SelectedTicketsTable = ({priceRanges, selectedSeats, onDeleteSelectedSeat}) => {

    const tickets = selectedSeats.map((item, i) => {
        return <Ticket key={i} row={item.row} place={item.seat} side={item.side} onDeleteSelectedSeat={onDeleteSelectedSeat} />;
    })

    let ticketsCount = null;
    let ticketsAmount = null;

    if(selectedSeats && selectedSeats.length > 0){
        ticketsCount = `${selectedSeats.length} tickets`;
        ticketsAmount = `$${selectedSeats.reduce((res, item) => {
            return res + item.price;
        }, 0)}`;
    }
    
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
                    <div className="amount__tickets">{ticketsCount}</div>
                    <div className="amount__money">{ticketsAmount}</div>
                </div>
                <a href="#" className="btn-to-card">To the cart</a>
            </div>
        </div>
    );
}

export default SelectedTicketsTable;