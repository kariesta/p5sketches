import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils.js";

//TODO correct lines for a to b and b to a.
export default function twisty(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let dots = [], lines = [];
    let dotR = 20, circleR = 100, numOfDots = 12;
    let lastDot,startDot,endDot,dotDiff,locked, animate;
    let inputD, inputC;
    class Dot {
        constructor(i,x,y){
            this.nr = i;
            this.x = x;
            this.y = y;
        }
    }
    class Line {
        constructor(i,x1,y1,x2,y2){
            this.nr = i;
            this.x1 = x1;
            this.x2 = x2;
            this.y1 = y1;
            this.y2 = y2;
        }
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        resetDots(p5);

        inputD = p5.createInput(numOfDots);
        inputC = p5.createInput(circleR);
        inputD.size(30);
        inputC.size(30);
        p5.fill(20);
        p5.stroke(20);
        p5.textSize(12);
        p5.text("dots",10, 65);
        p5.text("radius",10, 95);

        const {x: buttonBaseX, y: buttonBaseY} = canvasParentRef.getBoundingClientRect();
        inputD.position(buttonBaseX+60, buttonBaseY+65);
        inputC.position(buttonBaseX+60, buttonBaseY+95);
    };

    const notInitialiced = () => {
        return lastDot === undefined && startDot === undefined && endDot === undefined && dotDiff === undefined &&
            locked === undefined && animate === undefined && inputD === undefined && inputC === undefined
    };

    const draw = p5 => {
        if (notInitialiced()) return;
        if (inputD.value() !== numOfDots || inputC.value() !== circleR){
            numOfDots = inputD.value();
            circleR = inputC.value();
            resetDots(p5);
        }
        p5.background(135,206,235);
        p5.noStroke();
        for (const d of dots){
            //center  = height/2, cos((i/12)*360)*200 = x
            p5.fill(220+(d.nr*4),200+(d.nr*2),200-(d.nr*10));
            p5.ellipse(d.x,d.y,dotR,dotR);
        }
        for (const l of lines){
            p5.strokeWeight(dotR);
            p5.stroke(220+(l.nr*4),200+(l.nr*2),200-(l.nr*10));
            p5.line(l.x1,l.y1,l.x2,l.y2)
        }
        if (locked) {
            let d = dots[startDot];
            p5.strokeWeight(dotR);
            p5.stroke(220+(d.nr*4),200+(d.nr*2),200-(d.nr*10));
            p5.line(p5.mouseX,p5.mouseY,d.x,d.y);
        }
        if (animate){
            let nextDot = (endDot+dotDiff)%numOfDots;
            ////console.log("yo"+nextDot+",start:"+startDot+",end:"+endDot);
            lines.push(new Line(endDot,dots[endDot].x,dots[endDot].y,dots[nextDot].x,dots[nextDot].y));
            endDot = (endDot+1)%numOfDots;
            if (startDot === endDot){
                animate = false;
            }
        }
    };

    const mousePressed = (p5) => {
        if(mouseInDots(p5)){
            locked = true;
            startDot = lastDot;
        }
        lines = [];
    };

    const mouseReleased = (p5) => {
        locked = false;
        if(mouseInDots(p5)) {
            endDot = lastDot;
            animate = true;
            dotDiff = Math.abs((startDot-endDot));//(endDot-startDot)%12;
            //console.log(endDot+","+startDot+","+dotDiff);
        }
    };

    const mouseInDots = (p5) => {
        let inDot = false;
        for (const d of dots){
            const myDist = p5.dist(d.x, d.y, p5.mouseX, p5.mouseY);
            if( myDist<dotR){
                inDot = true;
                lastDot = d.nr;
            }
        }
        return inDot;
    };

    const resetDots = (p5) => {
        dots = [];
        lines = [];
        lastDot = 0;
        startDot = 0;
        endDot = 0;
        dotDiff = 0;
        locked = false;
        animate = false;
        for (let i = 0; i < numOfDots; i++) {
            let x = (wWidth/2)+p5.cos((i/numOfDots)*360)*circleR;
            let y = (wHeight/2)+p5.sin((i/numOfDots)*360)*circleR;
            dots.push(new Dot(i,x,y));
        }
    };

    return <TwistySketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased} />;
}

class TwistySketch extends Sketch {}