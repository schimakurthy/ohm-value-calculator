import React, { Component } from 'react';
// import './index.css';

class ColorCodes extends Component {

  constructor(props) {
    super(props);

    //Set the codes state.
    this.state = {

      active: props.active
    }

     this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div className="row" >
        <button className="resistor-band" style={{ 'backgroundColor': this.props.code, 'cursor':this.props.code !== 'grey'?'pointer':'not-allowed'}} onClick={ this.onClick }/>
      </div>
    );
  }

   /**
     * Updates the parent component when a code is selected.
     * 
     */
    onClick(){
        console.log(this.props.code);
      // Verify the code is not disabled.
      if(this.props.code !== 'grey'){

          // Update the parent with the new code.
          this.props.codeChanged(this.props.code);
      }
  }
}

export default ColorCodes;

