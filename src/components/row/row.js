import React, {Component} from 'react';

import './row.css';

import Place from '../place';

const Row = (props) => {

    const checkIsPlaceBusy = (rowNumber, placeNumber, side, lockedSeats) => {

        let res = false;

        lockedSeats.forEach((item) => {
            if(item.row === rowNumber) {
                res = item.seats.includes(`${placeNumber}${side}`);
            }
        })

        return res;
    }

    const checkIsPlaceSelected = (rowNumber, placeNumber, side, selectedSeats) => {

        let res = false;
        if(selectedSeats && selectedSeats.length > 0) {
            selectedSeats.forEach((item) => {
console.log("item in checking: ", item)

                if(item.row === rowNumber) {
                    res = item.seat === (`${placeNumber}${side}`);
                }
            })
        }
        

        return res;
    }

    const generatePlaces = () => {
        let countPlace = [];

        for(let i = 1; i <= props.countPlace; i++) {
            // console.log(checkIsPlaceBusy(props.rowNumber, i, props.side, props.lockedSeats));
            countPlace.push(<Place  key={i} 
                                    rowNumber={props.rowNumber} 
                                    placeNumber={i} 
                                    side={props.side}
                                    color={props.color} 
                                    price={props.price}
                                    deletedSeat={props.deletedSeat}
                                    isSelected={checkIsPlaceSelected(props.rowNumber, i, props.side, props.selectedSeats)}
                                    isBusy={checkIsPlaceBusy(props.rowNumber, i, props.side, props.lockedSeats)}
                                    onSelectSeat={props.onSelectSeat}/>);
        }

        return countPlace;
    }

    const clazz = props.classNames ? props.classNames : '';

    return (
        <div className={`hall-big-row ${clazz}`}>
            {generatePlaces()}
        </div>
    );
}

export default Row;