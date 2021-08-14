import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function sqOnSq(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let locked = false;
    let rects = [];
    let curStart = [];
    let curColor;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.colorMode(p5.HSB,100);
    };

    const draw = p5 => {
        p5.background(100, 30, 100);
        p5.noStroke();
        p5.fill(255, 217, 2, 100);

        for (let x of rects){
            p5.fill(x[4]);
            p5.rect(x[0],x[1],x[2],x[3]);
        }

        if(locked){
            p5.fill(curColor);
            p5.rect(curStart[0],curStart[1],p5.mouseX-curStart[0],p5.mouseY-curStart[1]);
        }
    };

    const mousePressed = (p5) => {
        locked = true;
        curColor = p5.color(p5.random(0,100),100,100,30);
        curStart = [p5.mouseX,p5.mouseY];
    };

    const mouseDragged = (p5) => {
        p5.rect([curStart[0],curStart[1],p5.mouseX-curStart[0],p5.mouseY-curStart[1]]);
    };

    const mouseReleased = (p5) => {
        locked = false;
        rects.push([curStart[0],curStart[1],p5.mouseX-curStart[0],p5.mouseY-curStart[1],curColor]);
        //endDot = lastDot;
        //animate = true;
        //dotDiff = Math.abs((startDot-endDot));//(endDot-startDot)%12;
        //console.log(endDot+","+startDot+","+dotDiff);
    };



    return <SqOnSqSketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased} mouseDragged={mouseDragged} />;
}

class SqOnSqSketch extends Sketch {}

