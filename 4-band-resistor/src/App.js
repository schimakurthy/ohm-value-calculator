import React, { Component } from 'react';
import Resistor from './Resistor';
import CodeSelectionTable from './CodeSelectionTable';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bandA: 'black',
      bandB: 'black',
      multiplierBand: 'black', 
      toleranceBand: 'brown',
      result: ''
    }

    this.handleColorCodeChange = this.handleColorCodeChange.bind(this);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label id="appHeader" className="App-title">Resistor Value Calculator</label>
        </header>
        <Resistor 
         bandA={this.state.bandA}
         bandB={this.state.bandB}
         multiplierBand={this.state.multiplierBand} 
         toleranceBand={this.state.toleranceBand}
         result={this.state.result}/>

        <CodeSelectionTable colorcodesSelected={this.handleColorCodeChange}/>
      </div>
    );
  }

    /**
   * Process the selected code and calculates the resistors ohm value and tolerance.
   * @param {*} name The name of the selected code.
   * @param {*} code The color of the selected code.
   */
  handleColorCodeChange(selectedBand, selectedColor) {

    if (selectedBand === "Band A") {

      this.setState({ bandA: selectedColor },this.getResistorValue);
    }
    else if (selectedBand === "Band B") {

      this.setState({ bandB: selectedColor },this.getResistorValue);
    }

    else if (selectedBand === "Multiplier") {

      this.setState({ multiplierBand: selectedColor },this.getResistorValue);
    }
    else {

      this.setState({ toleranceBand: selectedColor },this.getResistorValue);
    }    
    //this.getResistorValue();
  }

  getResistorValue() {

    let queryString = this.state.bandA + '/' + this.state.bandB + '/' + this.state.multiplierBand + '/' + this.state.toleranceBand;

    axios.get('http://localhost:54841/api/OhmValue/GetResistorValue/' + queryString).then(apiResponse => {
      console.log(apiResponse.data);
      this.setState({ result: apiResponse.data });
    });
  }
}

export default App;

