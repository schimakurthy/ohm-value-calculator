import React from 'react';

class Resistor extends React.Component {
    render() {
        return (
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
            <div style={{ 'display': 'flex', 'flexDirection': 'row', 'marginTop': '20px' }}>
            <div className="result">
                {this.props.result}
            </div>
            </div>
                    
                
                <div style={{ 'display': 'flex', 'flexDirection': 'row', 'marginTop': '20px' }}>
                    <div className="wire" />
                    <div className="resistor-left-handle" />
                    <div className="band-holder" />
                    <div className="band-one" style={{ 'backgroundColor': this.props.bandA }} />
                    <div className="band-two" style={{ 'backgroundColor': this.props.bandB }} />
                    <div className="multiplier-band" style={{ 'backgroundColor': this.props.multiplierBand }} />
                    <div className="tolerance-band" style={{ 'backgroundColor': this.props.toleranceBand}} />
                    <div className="resistor-right-handle" />
                    <div className="wire" />
                </div>

                
            </div>
        );
    }
}

export default Resistor;
