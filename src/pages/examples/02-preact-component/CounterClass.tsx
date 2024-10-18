import { Component } from "preact";

export class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment} class="w-6 text-center cursor-pointer">+</button>
        <div class="inline-block w-10 text-center">{this.state.count}</div>
        <button onClick={this.decrement} class="w-6 text-center cursor-pointer">-</button>
      </div>
    );
  }
}

export const counterCode = `
import { Component } from "preact";

export class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment} class="w-6 text-center cursor-pointer">+</button>
        <div class="inline-block w-10 text-center">{this.state.count}</div>
        <button onClick={this.decrement} class="w-6 text-center cursor-pointer">-</button>
      </div>
    );
  }
}
`;
