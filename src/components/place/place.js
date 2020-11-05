import React, {Component} from 'react';

import './place.css';

export default class Place extends Component {

    state ={
        color: '',
        chooseSeat: false,
        freeSeat: true,
        coordinates: {}
    }

    componentDidMount() {
        this.setDefaultColor();
        this.setCoordinates();
    }

    setDefaultColor = () => {
      if(!this.state.chooseSeat){
        this.setState({
          color: this.props.color
        })
      }
    }

    setCoordinates = () => {
      this.setState({
        coordinates: {row: this.props.rowNumber, seat: this.props.placeNumber}
      })
    }

    setChangedColor = () => {
      if(!this.state.chooseSeat){
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
      } else {
        this.setState({
          chooseSeat: true,
          color: 'black',
        })

        const a = this.props.onSelectSeat;
        a(this.state.coordinates);

      }
    }

    render(){
        return (
        <div className={`hall-place data-place-${this.props.placeNumber}`}
            style={{backgroundColor: `${this.state.color}`}}
            onMouseEnter={this.setChangedColor}
            onMouseLeave={this.setDefaultColor}
            onClick={this.chooseSeat}
        >
                {this.props.placeNumber}
        </div>
    );
    }
    
}