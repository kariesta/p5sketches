import simple from './simple.js';
import rays from './rays.js';
import fan from './fan.js';
import heart from './heart.js';
import breathe from './breathe.js';


const drawings = [
    {
        id: '0',
        description: 'en enkel animasjon',
        sketch: simple
    },
    {
        id: '1',
        description: 'Sol i svart-hvit',
        sketch: rays
    },
    {
        id: '2',
        description: 'vifte',
        sketch: fan
    },
    {
        id: '3',
        description: 'hjerte',
        sketch: heart
    },
    {
        id: '4',
        description: 'pust',
        sketch: breathe
    }
];

export default drawings;