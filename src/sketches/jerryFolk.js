import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function jerryFolk(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.frameRate(7);
        p5.angleMode(p5.DEGREES);
        p5.textAlign(p5.CENTER,p5.CENTER);
        p5.background(13, 247, 216);
    };

    const draw = p5 => {
        p5.background(13, 247, 216,1);
        p5.stroke(255);
        p5.strokeWeight(5);
        p5.fill(255, 30, 211);
        p5.textSize(50);
        let l = wWidth/6;
        /*let x = l*0.5+10*p5.sin((backMoves(moves))*2);
        let y = (wHeight/2)+(wHeight*0.4)*p5.cos(moves);
        p5.push();
        p5.rotate(p5.cos(moves)*5);
        p5.text("F",x,y);
        p5.pop();*/
        let x = l*0.6;//+10*p5.sin((backMoves(moves))*2);
        let y = (wHeight/2)+(wHeight*0.4)*p5.cos(moves);
        p5.push();
        p5.translate(0,p5.cos(moves)*5);
        p5.rotate(p5.cos(moves)*5);
        p5.text("F",x,y);
        p5.pop();

        x = l*1.25+10*p5.sin(moves);
        y = (wHeight/2)+(wHeight/2)*p5.cos(moves);
        p5.text("U",x,y);
        x = l*2.25+10*p5.sin(moves);
        y = (wHeight/2)+(wHeight/2)*p5.cos(moves);
        p5.text("T",x,y);
        x = l*3.25+10*p5.sin(moves);
        y = (wHeight/2)+(wHeight/2)*p5.cos(moves);
        p5.text("U",x,y);
        x = l*4.25+10*p5.sin(moves);
        y = (wHeight/2)+(wHeight/2)*p5.cos(moves);
        p5.text("R",x,y);
        x = l*5.25+10*p5.sin(moves);
        y = (wHeight/2)+(wHeight/2)*p5.cos(moves);
        p5.text("E",x,y);

        if(moves<360){
            moves=(moves+5)%360;
        }

        /*if(!p5.mouseIsPressed){
            moves=(moves+0.1)%360;
        }*/
    };

    const backMoves = (degree) => {
        if ((degree%360)>180) {
            return 180-(degree%180)
        } else {
            return (degree%180)
        }
    }

    const xRot = (p5,l,a) => {
        return l+10*p5.sin(moves+a)
    };

    const yRot = (p5,a) => {
        return (wHeight/2)+(wHeight/2)*p5.cos(moves+a)
    };

    return <JerryFolkSketch setup={setup} draw={draw} />;
}

class JerryFolkSketch extends Sketch {}

