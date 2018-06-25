import React, { Component } from 'react';

import {Multipliers,Tolerances,Numbers} from './BandCodes';
import ColorCodes from './ColorCodes';

// import Resistor from './Resistor';

class ResistorBand extends Component {

    constructor(props) {
        super(props);

        // Set the color bands items source based on the band type.
        this.state = {
            BandDataSource: Numbers,
            MultiplierDataSource: Multipliers,
            ToleranceDataSource: Tolerances
        }

        this.onCodeChanged = this.onCodeChanged.bind(this);
    }

    render() {
        
        return (

           <div style={{ 'display': 'flex', 'flexDirection': 'column','marginTop':'15px', 'width':'100px' }}>

                <div id="bandHeader" className="row">{ this.props.bandHeader }</div>
                
                {
                    // Render elements for all significant number bands.
                    this.props.bandType === "bandA" || this.props.bandType === "bandB" ? (
                        this.state.BandDataSource.map((el, i) => 
                        <ColorCodes key={i} group={this.props.bandHeader} code={el.background} header={el.value} active={el.active} codeChanged={this.onCodeChanged} />)
                    ) : (
                    
                    // Render elements for the multiplier band.
                    this.props.bandType === "Multiplier" ? (
                        this.state.MultiplierDataSource.map((el, i) => 
                        <ColorCodes key={i} group={this.props.bandHeader} code={el.background} header={el.value} active={el.active} codeChanged={this.onCodeChanged} />)
                    ) : (
                    // Render elements for the tolerance band.
                    this.props.bandType === "Tolerance" ? (
                        
                        this.state.ToleranceDataSource.map((el, i) => 
                        <ColorCodes key={i} group={this.props.bandHeader} code={el.background} header={el.value} active={el.active} codeChanged={this.onCodeChanged} />)
                    ) : (
                    // Dont render anything.
                    null )))
                }
            </div>
          );
    }

        /**
     * Process code changes and manages the active states of the color codes.
     * @param {*} code The code/color that was selected in the list.
     */
    onCodeChanged(code){
        
        // Unselect the previous selected code and select the new one!
        const update = this.state.BandDataSource.map((el)=> el.background !== code ? Object.assign({}, el, {active: false}) : Object.assign({}, el, {active: true})); 
        
        // Update the state to reflect the changes.
        this.setState({ BandDataSource: update });

        // Inform the parent the selection has changed.
        this.props.selectionChanged(this.props.bandHeader, code);
    }

   
}

export default ResistorBand;

