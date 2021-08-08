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
import water from "../sketches/water";
import unitCircle from "../sketches/unitCircle";

let id = 0;
const getId = () => {
    let nowId = id.toString();
    id++;
    return nowId;
};

export const categories = [
    "interaktivt","inputfelt","enkelt","album","noise/random"
];

//TODO lag et filter med tags, interaktivt, inputfelt, enkelt, album, noise/random
export const drawings = [
    {
        id: getId(),
        description: 'en enkel animasjon',
        sketch: simple,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'Sol i svart-hvit',
        sketch: rays,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'vifte',
        sketch: fan,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'hjerte',
        sketch: heart,
        categories: [categories[0], categories[2]]
    },
    {
        id: getId(),
        description: 'pust',
        sketch: breathe,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'pyramide',
        sketch: pyramid,
        categories: [categories[0]]
    },
    {
        id: getId(),
        description: 'tekniske problemer',
        sketch: techdiff,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'splat',
        sketch: splat,
        categories: [categories[0], categories[2]]
    },
    {
        id: getId(),
        description: 'spinny boi',
        sketch: spins,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'fargeruter',
        sketch: colorSqrs,
        categories: [categories[0], categories[2]]
    },
    {
        id: getId(),
        description: 'Insert sortering',
        sketch: sortyBoy,
        categories: [categories[0], categories[1], categories[2]]
    },
    {
        id: getId(),
        description: 'Pinkfloyd - the dark side of the moon',
        sketch: pinkfloyd,
        categories: [categories[0], categories[2],categories[3]]
    },
    {
        id: getId(),
        description: 'spirograph',
        sketch: spirograph,
        categories: [categories[0], categories[2]]
    },
    {
        id: getId(),
        description: 'sol og strand',
        sketch: sunny,
        categories: [categories[0], categories[2]]
    },
    {
        id: getId(),
        description: 'string-art',
        sketch: twisty,
        categories: [categories[0], categories[1], categories[2]]
    },
    {
        id: getId(),
        description: 'mønstermonster',
        sketch: moenster,
        categories: [categories[2]]
    },
    {
        id: getId(),
        description: 'tumbleweed',
        sketch: tumble,
        categories: [categories[4]]
    },
    {
        id: getId(),
        description: 'glitchy',
        sketch: glitchy,
        categories: [ categories[2]]
    },
    {
        id: getId(),
        description: 'thread-figures',
        sketch: threadEllipse,
        categories: [categories[0]]
    },
    {
        id: getId(),
        description: 'sinus-wave',
        sketch: sinuswave,
        categories: [categories[0]]
    },
    {
        id: getId(),
        description: 'falling',
        sketch: falling,
        categories: [categories[0]]
    },
    {
        id: getId(),
        description: 'Sigma - find me, but colour updates.',
        sketch: findMe,
        categories: [categories[2], categories[3]]
    },
    {
        id: getId(),
        description: 'Tally hall - turn of the lights, but spinning',
        sketch: tallyHall,
        categories: [categories[0], categories[3]]
    },
    {
        id: getId(),
        description: 'A tree',
        sketch: tree,
        categories: [categories[4]]
    },
    {
        id: getId(),
        description: 'Vulfpeck - thrill of the arts, but mouse reactive',
        sketch: vulfPeck,
        categories: [categories[0], categories[3]]
    },
    {
        id: getId(),
        description: 'Classixx - all your waiting for, but arms and legs moving',
        sketch: classixx,
        categories: [categories[3]]
    },
    {
        id: getId(),
        description: 'wavey pattern',
        sketch: wavey,
        categories: [categories[0]]
    },
    {
        id: getId(),
        description: 'TODO: jerry folk - futura, but moving into place',
        sketch: jerryFolk,
        categories: [categories[0], categories[3]]
    },
    {
        id: getId(),
        description: 'TODO: water',
        sketch: water,
        categories: [categories[4]]
    },
    {
        id: getId(),
        description: 'Enhetssirkel',
        sketch: unitCircle,
        categories: [categories[0]]
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
//TODO ball som faller nedover, ymse figurer går oppover, ball triller av.
//TODO tegne elipse ved å ha en "tråd" mellom to punkter og nærmeste punktet mot musetasten. tegne punkter når en holder inne musa
//TODO demonstrate that curved triangles roll as smooth as circles.