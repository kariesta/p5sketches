import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function osaka(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const steps = 5;
    const overlap = 0.10;
    const stripeWidth = (wWidth/(steps-(overlap*(steps+1))));
    const stepoffset = stripeWidth*(1-(2*overlap));
    let moves = 0;
    let moveInc = 0.03;

    let cream, orange,redish, skyblue;
    //let cream, orange,redish, azure, skyblue;
    //let cream, orange, redish ,skyblue;
    //let colors;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.colorMode(p5.HSB,100);
        //p5.blendMode(p5.ADD);
        const opacity = 60;
        const colorScale = 100/360;
        //cream = p5.color(248,251,224);
        cream = p5.color(67*colorScale,11,98);
        orange = p5.color(35*colorScale,77,92,   opacity);
        //orange = p5.color(255,173,59,   170);
        redish = p5.color(15*colorScale,79,96,   opacity);
        //redish = p5.color(246,100,52,   170);
        //azure = p5.color(210*colorScale,100,100,     opacity);
        //azure = p5.color(0,127,255,     170);
        skyblue = p5.color(190*colorScale,100,87, opacity);
        //skyblue = p5.color(128,217,255, 170);

        //colors = [cream, orange,redish, azure,skyblue];
    };

    const draw = p5 => {
        if (moves !== 0) return;
        p5.background(cream);
        p5.noStroke();

        //draw
        //let lerpStep = 1/steps;
        //let acc = 0;
        let fract = [0, 0.1, 0.25, 0.8, 1];//1;
        for (let i = 0; i<steps; i++){

            let lerpyColor = p5.lerpColor(orange,redish,fract[i]);//i*lerpStep);
            p5.fill(lerpyColor);
            p5.rect((stepoffset*i)+(overlap*stripeWidth),0,stripeWidth,wHeight);

            lerpyColor = p5.lerpColor(orange,skyblue,fract[i] );//i*lerpStep);
            p5.fill(lerpyColor);
            p5.rect(0,(stepoffset*i)+(overlap*stripeWidth),wWidth,stripeWidth);


            }


        moves+=moveInc;
        if(moves > 1 || moves<0){
            moveInc = -moveInc;
        }
    };

    return <OsakaSketch setup={setup} draw={draw} />;
}

class OsakaSketch extends Sketch {}

