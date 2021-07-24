import simple from './simple.js';
import rays from './rays.js';
import fan from './fan.js';
import heart from './heart.js';
import breathe from './breathe.js';
import pyramid from './pyramid.js';
import techdiff from './techdiff.js';
import splat from './splat.js';
import spins from './spins.js';
import colorSqrs from "./colorSqrs";
import sortyBoy from "./sortyBoy";
import pinkfloyd from "./pinkfloyd";
import spirograph from "./spirograph";
import sunny from "./sunny";
import twisty from "./twisty";

let id = 0;
const getId = () => {
    let nowId = id.toString();
    id++;
    return nowId;
};

const drawings = [
    {
        id: getId(),
        description: 'en enkel animasjon',
        sketch: simple
    },
    {
        id: getId(),
        description: 'Sol i svart-hvit',
        sketch: rays
    },
    {
        id: getId(),
        description: 'vifte',
        sketch: fan
    },
    {
        id: getId(),
        description: 'hjerte',
        sketch: heart
    },
    {
        id: getId(),
        description: 'pust',
        sketch: breathe
    },
    {
        id: getId(),
        description: 'pyramide',
        sketch: pyramid
    },
    {
        id: getId(),
        description: 'tekniske problemer',
        sketch: techdiff
    },
    {
        id: getId(),
        description: 'splat',
        sketch: splat
    },
    {
        id: getId(),
        description: 'spinny boi',
        sketch: spins
    },
    {
        id: getId(),
        description: 'fargeruter',
        sketch: colorSqrs
    },
    {
        id: getId(),
        description: 'Insert sortering',
        sketch: sortyBoy
    },
    {
        id: getId(),
        description: 'pinkfloyd - the dark side of the moon',
        sketch: pinkfloyd
    },
    {
        id: getId(),
        description: 'spirograph',
        sketch: spirograph
    },
    {
        id: getId(),
        description: 'sol og strand',
        sketch: sunny
    },
    {
        id: getId(),
        description: 'string-art',
        sketch: twisty
    }
];

export default drawings;