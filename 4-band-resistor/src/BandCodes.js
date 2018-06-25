

/**
     * Collection of multiplier models.
     */
const Multipliers = [
    { background: 'black', active: true, value: '1Ω' },
    { background: 'brown', active: false, value: '10Ω' },
    { background: 'red', active: false, value: '100Ω' },
    { background: 'orange', active: false, value: '1KΩ' },
    { background: 'yellow', active: false, value: '10KΩ' },
    { background: 'green', active: false, value: '100KΩ' },
    { background: 'blue', active: false, value: '1MΩ' },
    { background: 'purple', active: false, value: '10MΩ' },
    { background: 'grey', active: false, value: '' },
    { background: 'grey', active: false, value: '' },
    { background: 'gold', active: false, value: '.1' },
    { background: 'silver', active: false, value: '.01' }
];

/**
 * Collection of tolerance models.
 */
const Tolerances = [
    { background: 'grey', active: false, value: '' },
    { background: 'brown', active: true, value: '±1%' },
    { background: 'red', active: false, value: '±2%' },
    { background: 'grey', active: false, value: '' },
    { background: 'grey', active: false, value: '' },
    { background: 'green', active: false, value: '±0.5%' },
    { background: 'blue', active: false, value: '±0.25%' },
    { background: 'purple', active: false, value: '±0.10%' },
    { background: 'gray', active: false, value: '±0.05' },
    { background: 'grey', active: false, value: '' },
    { background: 'gold', active: false, value: '±5%' },
    { background: 'silver', active: false, value: '±10%' }
];

/**
* Collection of significant digit models.
*/
const Numbers = [
    { background: 'black', active: true, value: '0' },
    { background: 'brown', active: false, value: '1' },
    { background: 'red', active: false, value: '2' },
    { background: 'orange', active: false, value: '3' },
    { background: 'yellow', active: false, value: '4' },
    { background: 'green', active: false, value: '5' },
    { background: 'blue', active: false, value: '6' },
    { background: 'purple', active: false, value: '7' },
    { background: 'gray', active: false, value: '8' },
    { background: 'white', active: false, value: '9' },
    { background: 'grey', active: false, value: '' },
    { background: 'grey', active: false, value: '' }
];


export {Multipliers,Tolerances,Numbers};