import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { face1: 'one', face2: 'one', isRolled: false };
    this.roll = this.roll.bind(this);
  }

  newRoll() {
    const rando = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    return rando;
  }

  roll() {
    this.setState({ face1: this.newRoll(), face2: this.newRoll(), isRolled: true });
    setTimeout(() => {
      this.setState({ isRolled: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-Die">
          <Die face={this.state.face1} rolling={this.state.isRolled} />
          <Die face={this.state.face2} rolling={this.state.isRolled} />
        </div>
        <button disabled={this.state.isRolled} onClick={this.roll}>
          {this.state.isRolled ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
