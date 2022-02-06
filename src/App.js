import React, {Component} from 'react'
import './App.css';

class App extends Component{
  constructor(){
      super();
      this.state = {
      counter: 0,
  };

} 

    plusBtn = () => {
      this.setState({ counter: this.state.counter +1 });
    }

    minusBtn = () => {
      this.setState({ counter: this.state.counter -1 });
    }

    render(){
    return (
    <div className="App">
        <h1>Contador: {this.state.counter}</h1>
        <button onClick={this.minusBtn}>-</button>
        <button onClick={this.plusBtn}>+</button>
    </div>
    )
  }
}

export default App;
