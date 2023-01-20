import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState({ ...result });
  }

  render() {
    const result = this.state;

    return (
      <div id="calculator">
        <Display
          result={result.total}
          next={result.next}
          operation={result.operation}
        />
        <div id="calculator-items">
          <button onClick={this.handleClick} className="button" type="button">AC</button>
          <button onClick={this.handleClick} className="button" type="button">+/-</button>
          <button onClick={this.handleClick} className="button" type="button">%</button>
          <button onClick={this.handleClick} className="button orange" type="button">÷</button>
          <button onClick={this.handleClick} className="button" type="button">7</button>
          <button onClick={this.handleClick} className="button" type="button">8</button>
          <button onClick={this.handleClick} className="button" type="button">9</button>
          <button onClick={this.handleClick} className="button orange" type="button">x</button>
          <button onClick={this.handleClick} className="button" type="button">4</button>
          <button onClick={this.handleClick} className="button" type="button">5</button>
          <button onClick={this.handleClick} className="button" type="button">6</button>
          <button onClick={this.handleClick} className="button orange" type="button">-</button>
          <button onClick={this.handleClick} className="button" type="button">1</button>
          <button onClick={this.handleClick} className="button" type="button">2</button>
          <button onClick={this.handleClick} className="button" type="button">3</button>
          <button onClick={this.handleClick} className="button orange" type="button">+</button>
          <button onClick={this.handleClick} className="button" id="zero" type="button">0</button>
          <button onClick={this.handleClick} className="button" type="button">.</button>
          <button onClick={this.handleClick} className="button orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
