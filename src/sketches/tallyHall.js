import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function tallyHall(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const squareSide = wWidth/2;
    const turns = 12;
    let tile, tiles;
    let degrees = 45;

    const setup = (p5, canvasParentRef) => {
        p5.frameRate(30);
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        p5.imageMode(p5.CENTER);

        tile = newTile(p5);
        tiles = tileCovering(p5);
    };

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.translate(wWidth/2, wHeight/2);
        let shorterSides = p5.dist(squareSide,0,0,squareSide);
        let rel = shorterSides/wWidth;
        p5.image(tiles,0,0);
        for (let turn = 0; turn < turns; turn++){
            p5.rotate(degrees);
            p5.image(tiles,0,0,shorterSides,shorterSides);
            shorterSides*=rel;
        }
        if(!p5.mouseIsPressed){
            degrees = (degrees+1)%360;
        }
    };

    const newTile = (p5) => {
        let newtile = p5.createGraphics(squareSide,squareSide);
        newtile.angleMode(p5.DEGREES); // Change the mode to DEGREES
        newtile.background(255);
        newtile.fill(0);
        newtile.noStroke();
        newtile.textSize(42);

        newtile.triangle(0,0,0,squareSide,squareSide,squareSide);
        newtile.textAlign(p5.CENTER, p5.TOP);
        newtile.text('TALLY',squareSide*0.5,squareSide*0.05);
        newtile.fill(255);
        newtile.rotate(90);
        newtile.textAlign(p5.CENTER, p5.BOTTOM);
        newtile.text('HALL',squareSide*0.5,squareSide*-0.05);
        return newtile;
    };

    const tileCovering = (p5) => {
        let tileRotations = p5.createGraphics(wWidth,wHeight);
        tileRotations.noStroke();
        tileRotations.angleMode(p5.DEGREES); // Change the mode to DEGREES
        tileRotations.image(tile,0,0);
        tileRotations.push();
        tileRotations.rotate(90);
        tileRotations.image(tile,0,-wHeight,squareSide,squareSide);
        tileRotations.pop();
        tileRotations.filter(p5.INVERT);
        tileRotations.scale(1,-1);
        tileRotations.image(tile,0,-wHeight);
        tileRotations.rotate(90);
        tileRotations.image(tile,-wWidth,-wHeight);
        return tileRotations
    };

    return <SimpleSketch setup={setup} draw={draw} />;
}

class SimpleSketch extends Sketch {}

