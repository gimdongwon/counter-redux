import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";
class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
    console.log("asdf");
  };

  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    return (
      <Counter
        number={this.props.number}
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

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ increment, decrement }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
