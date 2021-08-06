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
import tallyHall from "../sketches/tallyHall";
import classixx from "../sketches/classixx";
import tree from "../sketches/tree";
import jerryFolk from "../sketches/jerryFolk";
import wavey from "../sketches/wavey";

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
        description: 'Sigma - find me, but colour updates.',
        sketch: findMe
    },
    {
        id: getId(),
        description: 'Tally hall - turn of the lights, but spinning',
        sketch: tallyHall
    },
    {
        id: getId(),
        description: 'A tree',
        sketch: tree
    },
    {
        id: getId(),
        description: 'Vulfpeck - thrill of the arts, but mouse reactive',
        sketch: vulfPeck
    },
    {
        id: getId(),
        description: 'Classixx - all your waiting for, but arms and legs moving',
        sketch: classixx
    },
    {
        id: getId(),
        description: 'TODO: wavey pattern',
        sketch: wavey
    },
    {
        id: getId(),
        description: 'TODO: jerry folk - futura, but moving into place',
        sketch: jerryFolk
    },
    /*{
        id: getId(),
        description: 'TODO: a rope, move up and down',
        sketch: simple
    },
    {
        id: getId(),
        description: 'TODO: blobs, either rows or floating around',
        sketch: simple
    },
    {
        id: getId(),
        description: 'TODO: mytype, but jumping off it',
        sketch: simple
    },
    {
        id: getId(),
        description: 'TODO: olaska loop line, but colors translating from orange/blue to pink/green',
        sketch: simple
    },
    {
        id: getId(),
        description: 'TODO: honningbarna opp de nye blanke, en prikk om gangen uten bakgrunn så tekst',
        sketch: simple
    },
    {
        id: getId(),
        description: 'TODO:',
        sketch: simple
    },*/
];

//TODO add new favicon
//TODO mimic this: desktop/mønster
//TODO ball som faller nedover, ymse figurer går oppover, ball triller av.
//TODO tegne elipse ved å ha en "tråd" mellom to punkter og nærmeste punktet mot musetasten. tegne punkter når en holder inne musa
//TODO demonstrate that curved triangles roll as smooth as circles.
export default drawings;