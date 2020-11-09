import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import SelectedTicketsTable from '../selected-tickets-table';

import './shopping-cart.css';

export default class ShoppingCart extends Component {

    state = {
        coordinates: []
    }

    componentDidMount() {
        if(this.props.selectedSeats){
            this.setState({
                coordinates: this.props.selectedSeats.selectedSeats
            })
        }
        
    }

    onDeleteSelectedSeat = (row, seat, side) => {
        this.setState(({coordinates}) => {
          const idx = coordinates.findIndex((item) => {
            return row === item.row && seat === item.seat && side === item.side;
          })
    
          const before = coordinates.slice(0, idx);
          const after = coordinates.slice(idx + 1);
          const newArr = [...before, ...after];
          
          localStorage.clear();
          localStorage.setItem('Coordinates', JSON.stringify(newArr));
          return {
            deletedSeat: {row: row, seat: seat, side: side},
            coordinates: newArr
          }
        })
        
      }

    render() {

        return(
            <Fragment>

                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col d-flex justify-content-center">
                            <span className="main-title">Shopping Cart</span>
                        </div>
                    </div>
                </div>

                {/* Container Shopping Cart */}
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="cart-warning">The tickets shown here have now been reserved for you for 10 minutes.</div>
                            <div className="cart-info">
                                <div className="cart-info__title">Lady Gaga | The world tour 2018 | 2 January</div>
                                <div className="cart-info__del">Delete selection</div>
                                <div className="cart-info__tickets">
                                    <SelectedTicketsTable selectedSeats={this.state.coordinates} onDeleteSelectedSeat={this.onDeleteSelectedSeat}/>

                                    <Link to='/paying' className="btn-pay">Pay</Link>
                                </div>
                                <div className="cart-info__terms-n-conditions"><input type="checkbox" /><span> I have read the <Link to='/terms'>Terms and Conditions</Link> and fully agree with them.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Shopping Cart */}
            </Fragment>
        );
    }
}