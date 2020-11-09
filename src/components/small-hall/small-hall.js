import React from 'react';

import './small-hall.css';

import Row from '../row';


const ExitsContainer = () => {
    return (
        <div class="sm-exits-container">
            <div class="sm-exit-left-bottom">
                <div class="exit__txt">Linke Seite</div>
                <div class="exit__block">Eingang Ausgang</div>
            </div>
            <div class="hall-name">Kleiner Saal</div>
            <div class="sm-exit-right-bottom">
                <div class="exit__txt">Rehte Seite</div>
                <div class="exit__block">Eingang Ausgang</div>
            </div>
        </div>
    );
}
  
const StageContainer = () => {
    return (
        <div class="sm-stage-container">
            <div class="sm-stage">
                <div class="sm-stage__scene">Buhne</div>
            </div>
            <div class="sm-stage__exits-top">
                <div class="sm-exit-left">Notausgang</div>
                <div class="sm-exit-right">Notausgang</div>
            </div>
        </div>
    );
}

const SmallHall = ({priceRanges, onSelectSeat, deletedSeat, lockedSeats, selectedSeats}) => {

    const getLastRowInRange = (item) => {
        let arrPropsNames = Object.getOwnPropertyNames(item.seats);
        let indx = arrPropsNames.length - 1;
        let row = arrPropsNames[indx];
        return row;
    }

    const getFirstRowInRange = (item) => {
        let arrPropsNames = Object.getOwnPropertyNames(item.seats);
        let row = arrPropsNames[0];
        return row;
    }

    const drawCenterRowAndSeats = (sits, rows) => {
      
        const res = [];

        for(let i = 1; i <= rows;  i++) {

            res.push(<Row key={i} rowNumber={i} countPlace={sits++} onSelectSeat={onSelectSeat}/>);

        }

        return res;
    }

    const coloredRows = (priceRanges, drawnRowAndSeats, side) => {

      let coloredRows = [];

      priceRanges.forEach((item) => {

          drawnRowAndSeats.forEach((row, i) => {

              let count = ++i;
              if(count >=  getFirstRowInRange(item) && count <= getLastRowInRange(item)) {

                  coloredRows.push(<Row color={item.color} side={side} selectedSeats={selectedSeats} lockedSeats={lockedSeats} deletedSeat={deletedSeat} price={item.price} key={count} {...row.props}/>);

              }
          })
      })

      return coloredRows;
    }


    let center = drawCenterRowAndSeats(17, 9);
    let coloredCenter = coloredRows(priceRanges, center);

      
      const smallHall = (
        <div className="tickets-selection-area">
          <div className="hall-container">
            
            <StageContainer />

            <div class="hall mt-4">
                {coloredCenter}
            </div>

            <ExitsContainer />

          </div>
        </div>
      )
    
    return smallHall;
  
}

export default SmallHall;