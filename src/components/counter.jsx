import React, { Component } from "react";

class Counter extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {

    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      // <div>
      //   {this.props.children}
      //   <span className={this.getBadgeClasses()}>
      //     {this.formatCount()}
      //   </span>
      //   <button onClick={() => onIncrement(counter)}
      //     className="btn btn-secondary btn-sm">Increment
      //   </button>
      //   <button onClick={() => onDelete(counter.id)}
      //     className="btn btn-danger btn-sm m-2">Delete</button>
      // </div>

      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2">+
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}>-
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="bnt btn-danger btn-sm m-2">Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "0" : count;
  }
}

export default Counter;
