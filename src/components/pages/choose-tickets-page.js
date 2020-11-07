import React, {Component} from 'react';

import ErrorBoundry from '../error-boundry';
import PageContainer from './page-container';
import BigHall from '../big-hall';
import SelectedTicketsTable from '../selected-tickets-table';


export default class ChooseTicketsPage extends Component {

    priceRanges = [
      {
        seats: {
          1: [
            "5L",
            "6L"
          ],
          5: [
            "7M",
            "8M"
          ]
        },
        price: 500,
        color: "rgb(253, 253, 135)"
      },
      {
          seats: {
            6: [
              "5L",
              "6L"
            ],
            9: [
              "7M",
              "8M"
            ]
          },
          price: 430,
          color: "rgb(255, 203, 231)"
        },
        {
          seats: {
            10: [
              "5L",
              "6L"
            ],
            15: [
              "7M",
              "8M"
            ]
          },
          price: 300,
          color: "rgb(209, 255, 203)"
        },
        
    ];

    state = {
      deletedSeat: {},
      coordinates: []
    }

    onSelectSeat = (coordinate, isSelected) => {
      if(isSelected) {
        this.setState(({coordinates}) => {
          const newArr = [...coordinates, coordinate];
          return {
            coordinates: newArr
          }
        })
      } else {
        this.onDeleteSelectedSeat(coordinate.row, coordinate.seat, coordinate.side)
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
        return {
          deletedSeat: {row: row, seat: seat, side: side},
          coordinates: newArr
        }
      })
      
    }

  render() {

    return (
          <ErrorBoundry>
              <PageContainer>

                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col d-flex justify-content-center">
                      <span className="main-title">Tickets</span>
                    </div>
                  </div>
                </div>

                <div className="container mt-4">
                  <div className="row">
                    <div className="col">
                      <div className="buy-tickets__title">Lady Gaga | The world tour 2018 | 2 January</div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-9">

                      <BigHall priceRanges={this.priceRanges} deletedSeat={this.state.deletedSeat} onSelectSeat={this.onSelectSeat} />

                    </div>
                    <div className="col-3">
                      <SelectedTicketsTable priceRanges={this.priceRanges} selectedSeats={this.state.coordinates} onDeleteSelectedSeat={this.onDeleteSelectedSeat}/>
                    </div>
                  </div>
                </div>

              </PageContainer>
          </ErrorBoundry>
      );
  }
}
