import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions, frame} from "./utils";

//TODO adjust for mobile screen
export default function sunny(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const paddingToFrame = 30;
    let mouseWeight = 0.06; //lineart
    let mouseWeightY = -0.11; //background
    let toCenter = wWidth/2;
    let sunW = (wWidth/2)+9, sunH = sunW-52;
    let backgroundColor,frameColor,waveColors;


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        //p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        backgroundColor = p5.color(250,245,245);
        frameColor = p5.color(0);
        waveColors = [p5.color(0,250,270),p5.color(0,225,245),p5.color(0,240,260)];
    };

    const notInitialiced = () => {
        return backgroundColor === undefined &&
            frameColor === undefined &&
            waveColors === undefined
    };

    const draw = p5 => {
        if (notInitialiced()) return;
        p5.background(backgroundColor);
        p5.noStroke();
        p5.fill(252,232,190);
        p5.ellipse(sunW+(mouseWeightY*(p5.mouseX-toCenter)),sunH+(mouseWeightY*(p5.mouseY-toCenter)),70,70);
        p5.noFill();
        p5.strokeWeight(20);
        let xOff = 0, yOff = 0;

        /*
        let waveOffset = [[30,0],[12,15],[-6,30]];
        for (let i = 0; i< waveColors.length;i++){
            wave(p5,waveColors[i],xOff+waveOffset[i]+(mouseWeightY*(p5.mouseX-toCenter)),yOff+waveOffset[i]+(mouseWeightY*(p5.mouseY-toCenter)),40);
        }
        */
        wave(p5,waveColors[0],xOff+30+(mouseWeightY*(p5.mouseX-toCenter)),yOff+(mouseWeightY*(p5.mouseY-toCenter)),40);
        wave(p5,waveColors[1],xOff+12+(mouseWeightY*(p5.mouseX-toCenter)),yOff+15+(mouseWeightY*(p5.mouseY-toCenter)),40);
        wave(p5,waveColors[2],xOff-6+(mouseWeightY*(p5.mouseX-toCenter)),yOff+30+(mouseWeightY*(p5.mouseY-toCenter)),40);

        //v lineart background v
        lineart(p5,backgroundColor,mouseWeightY,xOff,yOff);

        //v lineart v
        lineart(p5,frameColor,mouseWeight,xOff,yOff);

        //Final frame
        frame(p5,backgroundColor,frameColor,paddingToFrame,wWidth,wHeight);
    };

    const wave = (p5,color,xOff,yOff,wavesize) => {
        p5.stroke(color);
        for (let i = 0; i < 11; i++) {
            p5.arc(xOff+(wavesize*i),yOff+(wavesize*i),wavesize,wavesize,p5.HALF_PI, p5.PI);//wave*3
            p5.arc(xOff+(wavesize*i),yOff+(wavesize*(i+1)),wavesize,wavesize,p5.HALF_PI+p5.PI,0);//wave*3
        }
    };

    const lineart = (p5,color,movement,xOff,yOff) => {
        p5.strokeWeight(4);
        p5.noFill();
        let mX = (movement*(p5.mouseX-toCenter));
        let mY = (movement*(p5.mouseY-toCenter));
        p5.stroke(color);
        p5.arc(sunW+mX,sunH+mY,70,70, p5.PI+0.14,p5.HALF_PI-0.1);//wave*3
        wave(p5,color,xOff+38+mX,yOff-9+mY,40);
        wave(p5,color,xOff+21+mX,yOff+7+mY,40);
        wave(p5,color,xOff+4+mX,yOff+23+mY,40);
        wave(p5,color,xOff-13+mX,yOff+39+mY,40);
    };

    return <SunnySketch setup={setup} draw={draw} />;
}

class SunnySketch extends Sketch {}