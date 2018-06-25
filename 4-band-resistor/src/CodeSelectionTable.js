import React, { Component } from 'react';
import ResistorBand from './ResistorBands';

class CodeSelectionTable extends Component {
  constructor(props) {
    super(props);

    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  render() {
    return (
        <div className="color-code-table">
          <ResistorBand bandType={"bandA"} bandHeader={"Band A"} selectionChanged={this.onSelectionChanged} />
          <ResistorBand bandType={"bandB"} bandHeader={"Band B"} selectionChanged={this.onSelectionChanged} />
          <ResistorBand bandType={"Multiplier"} bandHeader={"Multiplier"} selectionChanged={this.onSelectionChanged} />
          <ResistorBand bandType={"Tolerance"} bandHeader={"Tolerance"} selectionChanged={this.onSelectionChanged} />
        </div>      
    );
  }

  /**
 * Informs the parent component of the selected code.
 * @param {*} name The name of the code.
 * @param {*} code The color of the code.
 */
  onSelectionChanged(name, code) {

    this.props.colorcodesSelected(name, code);
  }
}

export default CodeSelectionTable;

