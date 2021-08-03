import simple from '../sketches/simple.js';
import rays from '../sketches/rays.js';
import fan from '../sketches/fan.js';
import heart from '../sketches/heart.js';
import breathe from '../sketches/breathe.js';
import pyramid from '../sketches/pyramid.js';
import techdiff from '../sketches/techdiff.js';
import splat from '../sketches/splat.js';
import spins from '../sketches/spins.js';
import colorSqrs from "../sketches/colorSqrs";
import sortyBoy from "../sketches/sortyBoy";
import pinkfloyd from "../sketches/pinkfloyd";
import spirograph from "../sketches/spirograph";
import sunny from "../sketches/sunny";
import twisty from "../sketches/twisty";
import moenster from "../sketches/moenster";
import tumble from "../sketches/tumble";
import glitchy from "../sketches/glitchy";
import threadEllipse from "../sketches/threadEllipse";
import sinuswave from "../sketches/sinuswave";
import falling from "../sketches/falling";
import findMe from "../sketches/findMe";
import vulfPeck from "../sketches/vulfPeck";

let id = 0;
const getId = () => {
    let nowId = id.toString();
    id++;
    return nowId;
};

//TODO lag et filter med tags, interaktivt, inputfelt, enkelt, album, noise/random
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
        description: 'Pinkfloyd - the dark side of the moon',
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
    },
    {
        id: getId(),
        description: 'mønstermonster',
        sketch: moenster
    },
    {
        id: getId(),
        description: 'tumbleweed',
        sketch: tumble
    },
    {
        id: getId(),
        description: 'glitchy',
        sketch: glitchy
    },
    {
        id: getId(),
        description: 'thread-figures',
        sketch: threadEllipse
    },
    {
        id: getId(),
        description: 'sinus-wave',
        sketch: sinuswave
    },
    {
        id: getId(),
        description: 'falling',
        sketch: falling
    },
    {
        id: getId(),
        description: 'Sigma - find me, but bouncy or moving with colour updates.',
        sketch: findMe
    },
    {
        id: getId(),
        description: 'Vulfpeck - thrill of the arts, but more pointy as mouse moves vertically',
        sketch: vulfPeck
    }
];

//TODO ball som faller nedover, ymse figurer går oppover, ball triller av.
//TODO tegne elipse ved å ha en "tråd" mellom to punkter og nærmeste punktet mot musetasten. tegne punkter når en holder inne musa
export default drawings;