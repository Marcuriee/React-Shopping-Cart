import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {

  render() {
// so that we don't have to repeat this.props throughout code
// we're picking the property of the props that we're interested in below

   const { onReset, counters, onDelete, onIncrement } = this.props


    return (
      <div>
        <button
        onClick={onReset}
        className="btn btn-primary btn-sm m-2"
        >
        Reset
        </button>

        {counters.map(counter => (
          <Counter
           key={counter.id}
           onDelete={onDelete}
           onIncrement={onIncrement}
           counter={counter} //so that we can pass all info to counter component at one and not have to do value = counter.value etc.
           />
        ))}

      </div>
    );
  }
}

export default Counters;
