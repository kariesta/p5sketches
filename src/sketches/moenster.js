import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "../utils";

export default function moenster(){
    let moves = 0;
    const triangleSides = 50, triangleHeight = triangleSides*0.866;

    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
        p5.angleMode(p5.RADIANS);
    };

    const draw = p5 => {
        //background still
        p5.background(255);
        back(p5);

        //pattern1 horisontal
        lines(p5);

        //pattern2 diagonal
        squares(p5);

        moves = (moves%40)+1;
    };

    const back = (p5) => {
        p5.noStroke();
        p5.randomSeed(100);
        for (let down = 0; down<wHeight; down+=2*triangleHeight){
            const top = down,  mid = top + triangleHeight, bot = mid + triangleHeight;
            const ts = triangleSides, ts2 = triangleSides/2;
            p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
            p5.triangle(0,top,0,mid,ts2,mid);
            p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
            p5.triangle(0,bot,0,mid,ts2,mid);
            for (let x = 0; x< wWidth; x+=ts){
                p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
                p5.triangle(x,top,x+ts,top,x+ts2,mid);
                p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
                p5.triangle(x+ts2,mid,x+ts,top,x+ts2*3,mid);
                p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
                p5.triangle(x,bot,x+ts,bot,x+ts2,mid);
                p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
                p5.triangle(x+ts2,mid,x+ts,bot,x+ts2*3,mid);
            }
        }
    };

    const lines = (p5) => {
        p5.strokeWeight(10);
        p5.stroke(250,200,250,200);
        for (let x = -20; x< wWidth; x+=40){
            p5.line(20+x+moves,0,x+moves,wHeight);
        }
        p5.strokeWeight(10);
        p5.stroke(255,255,200,200);
        for (let x = -30; x< wWidth; x+=40){
            p5.line(0,30+x+moves,wWidth,x+moves);
        }
    };

    const squares = (p5) => {
        p5.stroke(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
        p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
        p5.rect(100,wHeight-30-(moves*9),30,30);
        p5.stroke(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
        p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
        p5.rect(240,wHeight-30-(moves*9),30,30);
        p5.stroke(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
        p5.fill(p5.random(255),p5.random(255),p5.random(255),p5.random(160,250));
        p5.rect(142,wHeight-25-(moves*9),30,30);

    };

    return <MoensterSketch setup={setup} draw={draw} />;
}

class MoensterSketch extends Sketch {}
