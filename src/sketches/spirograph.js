import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions, drawLine, inputField} from "./utils";

//TODO ved oppdatering legg tidligere linjer i en ny liste, som fader 33% ved hver nye liste i bakgrunnen.
export default function spirograph(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let degree = 0;
    let points = [], spiroP2 = [];
    //let  spiroP1 = [],
    let legacy = [];
    let bigRad = 67, tinyRad = 50, shortRad = 45;
    let totalRad = bigRad+tinyRad;
    let inputTiny, inputShort;
    let centerV, bigV,shortV;
    //let smallV;
    let bigCirc, smallCirc, smallSpeed;
    let colors = [];

    const resetVectors = (p5) => {
        if (spiroP2.length > 0) {
            legacy.push(spiroP2);
        }

        points = [];
        //spiroP1 = [];
        spiroP2 = [];

        //smallV = radiusVector(p5,120,tinyRad);
        shortV = radiusVector(p5,40,shortRad);

        smallCirc = p5.PI*2*tinyRad;
        bigCirc = p5.PI*2*totalRad;
        totalRad = bigRad+parseInt(tinyRad);
        smallSpeed = bigCirc/smallCirc;
    };

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //p5.frameRate(1);
        //regn ut coordinater, width,height

        //input
        inputTiny = inputField(p5,canvasParentRef,tinyRad,20,65,30);
        inputShort = inputField(p5,canvasParentRef,shortRad,20,95,30);

        resetVectors(p5);
        centerV = p5.createVector(wWidth/2,wHeight/2);
        bigV = radiusVector(p5,degree,bigRad);

        //console.log(" "+smallCirc+", "+bigCirc+", "+smallSpeed);
        //console.log(" "+spiroP1+", "+smallV+", ");
        colors = [p5.color(139,157,235,0),p5.color(135,235,152),p5.color(94,164,107)]
    };

    const draw = p5 => {
        if (inputTiny.value() !== tinyRad || inputShort.value() !== shortRad){
            tinyRad = inputTiny.value();
            shortRad = inputShort.value();
            resetVectors(p5);
        }

        p5.background(135, 206, 235);
        degree=(degree+2)%360;

        p5.fill(250);
        p5.noStroke();
        p5.ellipse(wWidth/2,(wHeight/2),totalRad*2,totalRad*2);
        p5.noFill();

        let orbitCenter = spiro(p5,centerV,bigV,1,points,colors[0]);
        p5.stroke(135, 206, 235);
        p5.ellipse(orbitCenter.x,orbitCenter.y,tinyRad*2,tinyRad*2);
        //let nextEnd =
        spiro(p5,orbitCenter,shortV,-smallSpeed,spiroP2,colors[2]);
        //let nextyEnd = spiro(p5,nextEnd,smallV,-smallSpeed,spiroP1,colors[1]);

        drawLegacy(p5);

        //regner ut ny posisjon for dot.
        //tegner en liste av tidligere og den nye dotten
    };

    const radiusVector = (p5,degrees,radius) => {
        return p5.createVector(p5.cos(degrees)*radius,p5.sin(degrees)*radius);
    };

    const spiro = (p5,centralV,spinV,speed,thesePoints,thisColor) => {
        let current = centralV.copy();
        spinV.rotate(speed);
        current.add(spinV);
        p5.stroke(135, 206, 235);
        p5.line(centralV.x,centralV.y,current.x,current.y);
        thesePoints.push([current.x,current.y]);
        p5.stroke(thisColor);
        drawLine(p5,thesePoints);
        return current;
    };

    const drawLegacy = (p5) => {
        let i = 3+legacy.length;
        let transparent = 1/i;
        legacy.forEach(pointRow =>
        {
            p5.stroke(139,157,235,255*transparent);
            i--;
            transparent += 1/i;
            drawLine(p5,pointRow);

        })
    };

    return <SpirographSketch setup={setup} draw={draw} />;
}

class SpirographSketch extends Sketch {}