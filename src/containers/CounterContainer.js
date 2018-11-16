import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";
export default class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    return (
      <Counter
        value={this.props.number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}
const mapStateToProps = ({ counter }) => ({
  number: counter.number
});

const mapDispatchToProps = { increment, decrement };

connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
