import React, {Component} from 'react';

import './big-hall.css';

import Row from '../row';


const ExitsContainer = () => {
    return (
        <div className="exits-container">
            <div className="exit-left-bottom">
                <div className="exit__txt">Linke Seite</div>
                <div className="exit__block">Eingang Ausgang</div>
            </div>
            <div className="hall-name">Grosse Saal</div>
            <div className="exit-right-bottom">
                <div className="exit__txt">Rehte Seite</div>
                <div className="exit__block">Eingang Ausgang</div>
            </div>
        </div>
    );
}
  
const StageContainer = () => {
    return (
        <div className="stage-container">
            <div className="exit-left">Notausgang</div>
            <div className="stage">
                <div className="stage__scene">Buhne</div>
                <div className="stage__parket">Mittelparket</div>
            </div>
            <div className="exit-right">Notausgang</div>
        </div>
    );
}

const BigHall = ({priceRanges, onSelectSeat, deletedSeat}) => {

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

            if(i <= 9){
                res.push(<Row key={i} rowNumber={i} countPlace={sits++} onSelectSeat={onSelectSeat}/>);
            }

            if(i > 9 && i <= 12) {
                res.push(<Row key={i} rowNumber={i} countPlace={sits--} onSelectSeat={onSelectSeat}/>);
            }

            if(i > 12) {
                res.push(<Row key={i} rowNumber={i} countPlace={sits++} onSelectSeat={onSelectSeat}/>);
            }
        }

        return res;
    }

    const drawSidesTop = (sits, rows) => {
        const res = [];

        for(let i = 1; i <= rows; i++){
            res.push(<Row key={i} rowNumber={i} countPlace={sits++} onSelectSeat={onSelectSeat}/>)
        }

        return res;

    }

    const drawSidesBottom = (sits, rows, side) => {
        const res = [];

        const whichSide = side ==='right' ? 'fck-content-right' : 'fck-content-left';

        for(let i = 9; i <= rows; i++){
            res.push(<Row key={i} rowNumber={i} countPlace={sits--} classNames={whichSide} onSelectSeat={onSelectSeat}/>)
        }

        return res;

    }

    const coloredRows = (priceRanges, drawnRowAndSeats, side) => {

      let coloredRows = [];

      priceRanges.forEach((item) => {

          drawnRowAndSeats.forEach((row, i) => {

              let count = ++i;
              if(count >=  getFirstRowInRange(item) && count <= getLastRowInRange(item)) {

                  coloredRows.push(<Row color={item.color} side={side} deletedSeat={deletedSeat} price={item.price} key={count} {...row.props}/>);

              }
          })
      })

      return coloredRows;
    }

    let left = [...drawSidesTop(3, 8), ...drawSidesBottom(10, 14, 'right')];
    let coloredLeft = coloredRows(priceRanges, left, 'L');
    let coloredLeftTop = coloredLeft.filter((item, i) => i <= 8)
    let coloredLeftBottom = coloredLeft.filter((item, i) => i >= 9)

    let right = [...drawSidesTop(3, 8), ...drawSidesBottom(10, 14, 'left')]
    let coloredRight = coloredRows(priceRanges, right, 'R');
    let coloredRightTop = coloredRight.filter((item, i) => i <= 8)
    let coloredRightBottom = coloredRight.filter((item, i) => i >= 9)

    let center = drawCenterRowAndSeats(15, 15);
    let coloredCenter = coloredRows(priceRanges, center);

      
      const bigHall = (
        <div className="tickets-selection-area">
          <div className="hall-container">
            
            <StageContainer />
            <div className="hall-big">
              <div className="hall-left-side">
                <div className="hall-left-side__top">
                  {coloredLeftTop}
                </div>
                <div className="hall-left-side__bottom">
                  {coloredLeftBottom}
                </div>
              </div>

              
              <div className="hall-main-side">
                {coloredCenter}
              </div>
              

              <div className="hall-right-side">
                <div className="hall-right-side__top">
                  {coloredRightTop}
                </div>
                <div className="hall-right-side__bottom">
                  {coloredRightBottom}
                </div>
              </div>
            </div>
            <ExitsContainer />

          </div>
        </div>
      )
    
    return bigHall;
  
}

export default BigHall;