import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import * as enzyme from 'enzyme';
import App from '../src/App';
import Resistor from '../src/Resistor';
import CodeSelectionTable from '../src/CodeSelectionTable';
import ResistorBand from '../src/ResistorBands';
enzyme.configure({ adapter: new Adapter() });

describe("<App />",()=>{
    it("Render application header",()=>{
        const app=shallow(<App/>);
        expect(app.find("label").length).toEqual(1);
        expect(app.find("label").text()).toEqual("Resistor Value Calculator");
    });

    it("Render resistor",()=>{
        const resistor=shallow(
        <Resistor bandA="brown"
        bandB="black"
        multiplierBand="brown"
        toleranceBand="red"
        result="100Ω ± 2%"/>);
        expect(resistor.text()).toEqual("100Ω ± 2%");
    });

    it("Render resistor",()=>{
        const resistor=shallow(
        <Resistor bandA="black"
        bandB="red"
        multiplierBand="black"
        toleranceBand="brown"
        result="2Ω ± 1%"/>);
        expect(resistor.text()).toEqual("2Ω ± 1%");
    });

    it("Render resistor",()=>{
        const resistor=shallow(
        <Resistor bandA="red"
        bandB="green"
        multiplierBand="yellow"
        toleranceBand="blue"
        result="250KΩ ± 0.25%"/>);
        expect(resistor.text()).toEqual("250KΩ ± 0.25%");
    });

    it("Render CodeSelectionTable",()=>{
        const codeSelectionTable=shallow(
        <CodeSelectionTable />);
        expect(codeSelectionTable.find("ResistorBand").length).toEqual(4);
    });

    it("Render ResistorBand",()=>{
        const resistorBand=shallow(
        <ResistorBand bandHeader="Band A"/>);
        expect(resistorBand.find("#bandHeader").text()).toEqual("Band A");
    });
});