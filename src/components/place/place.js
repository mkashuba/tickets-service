import React, {Component} from 'react';

import './place.css';

export default class Place extends Component {

    state = {
        color: '',
        chooseSeat: false,
        isBusy: false,
        coordinates: {}
    }

    componentDidMount() {
        this.setDefaultColor();
        this.setCoordinates();
    }

    componentDidUpdate(prevProps) {
      if(this.props.deletedSeat !== prevProps.deletedSeat) {
        if(this.state.coordinates.row === this.props.deletedSeat.row && this.state.coordinates.seat === this.props.deletedSeat.seat && this.state.coordinates.side === this.props.deletedSeat.side) {
            this.setState({
              color: this.props.color,
              chooseSeat: false
            })
        }
      }
    }

    setDefaultColor = () => {
      if(this.props.isSelected){

        this.setState({
          chooseSeat: true,
          color: 'black'
        })
      }
      if(!this.state.chooseSeat){
        this.setState({
          color: this.props.color
        })
      }
      
      if(this.props.isBusy){

        this.setState({
          isBusy: true,
          color: 'grey'
        })
      }
    }

    setCoordinates = () => {
      this.setState({
        coordinates: {row: this.props.rowNumber, seat: this.props.placeNumber, price: this.props.price, side: this.props.side}
      })
    }

    setChangedColor = () => {
      if(!this.state.chooseSeat && !this.state.isBusy){
        this.setState({
          color: '#ffc800'
        })
      }
    }

    chooseSeat = () => {
      if(this.state.chooseSeat){
        this.setState({
          chooseSeat: false,
          color: this.props.color
        })

        const a = this.props.onSelectSeat;
        a(this.state.coordinates, false);

      } else {
        this.setState({
          chooseSeat: true,
          color: 'black',
        })

        const a = this.props.onSelectSeat;
        a(this.state.coordinates, true);

      }
    }

    render(){

    const wtf = !this.state.isBusy ? this.chooseSeat : () => {};


        return (
        <div className={`hall-place data-place-${this.props.placeNumber}`}
            style={{backgroundColor: `${this.state.color}`}}
            onMouseEnter={this.setChangedColor}
            onMouseLeave={this.setDefaultColor}
            onClick={wtf}
        >
                {this.props.placeNumber}
        </div>
    );
    }

}