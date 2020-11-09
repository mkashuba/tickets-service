import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

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
    

const SelectedTicketsTable = ({selectedSeats, onDeleteSelectedSeat}) => {

    let tickets = selectedSeats.length > 0 ? selectedSeats.map((item, i) => {
        return <Ticket key={i} row={item.row} place={item.seat} side={item.side} onDeleteSelectedSeat={onDeleteSelectedSeat} />;
    }) : <p>No selected tickets</p>;

    let ticketsCount = null;
    let ticketsAmount = null;

    if(selectedSeats && selectedSeats.length > 0){
        ticketsCount = `${selectedSeats.length} tickets`;
        ticketsAmount = `$${selectedSeats.reduce((res, item) => {
            return res + item.price;
        }, 0)}`;
    }
    
    return (
        
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
                <Link to={{
                    pathname: "/shopping-cart",
                    selectedTickets: {
                        selectedSeats: selectedSeats
                    }
                }} className="btn-to-card">To the cart</Link>
            </div>
        
    );
}

export default SelectedTicketsTable;