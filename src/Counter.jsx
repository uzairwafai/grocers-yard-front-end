import React from "react";
class Counter extends React.Component {
  state = {
    count: 0,
  };
  inc = () => {
    let value = this.state.count;
    this.setState({ count: value + 1 });
  };
  dec = () => {
    let value = this.state.count;
    this.setState({ count: value - 1 });
  };

  render() {
    return (
      <div>
        <h1 className="font-semibold m-2">Count: {this.state.count}</h1>
        <div className="flex">
          <button
            onClick={this.inc}
            className="m-1 p-1 bg-gray-400 text-white rounded hover:bg-gray-600"
          >
            Increment
          </button>
          <button
            onClick={this.dec}
            className="m-1 p-1 bg-gray-400 text-white rounded hover:bg-gray-600"
          >
            Decrement
          </button>
         
        </div>
      </div>
    );
  }
}
export default Counter;
