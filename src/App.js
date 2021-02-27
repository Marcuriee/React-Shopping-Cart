import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  };

  handleIncrement = counter => { //counter is passed as an argument
    const counters = [...this.state.counters] //we can't change state directly
    const index = counters.indexOf(counter) // because counter is an argument
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({ counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
  };

  render() {
    return (
      <React.Fragment>
      <NavBar
        totalCounters={this.state.counters.filter(c => c.value > 0).length} //getting the values in array that are more than 0
      />
      <main className="container">
        <Counters
          counters={this.state.counters} //this is to pass info about counters like id to child components
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
