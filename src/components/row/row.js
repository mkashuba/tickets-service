import React, {Component} from 'react';

import './row.css';

import Place from '../place';

const Row = (props) => {

    const generatePlaces = () => {
        let countPlace = [];

        for(let i = 1; i <= props.countPlace; i++) {
            countPlace.push(<Place  key={i} 
                                    rowNumber={props.rowNumber} 
                                    placeNumber={i} 
                                    side={props.side}
                                    color={props.color} 
                                    price={props.price}
                                    deletedSeat={props.deletedSeat}
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