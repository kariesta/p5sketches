import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function falling(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let moves = 0;
    let distance, force;
    let ellipseX, ellipseY;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
        let v1 = p5.createVector(150,300);
        let v2 = p5.createVector(300,400);
        distance = v1.dist(v2);
        force = v2.sub(v1).div(distance);
        console.log(" "+wWidth+", "+wHeight);
        console.log(force);
        ellipseX = 200;
        ellipseY = -10;
    };

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.noStroke();
        p5.fill(255, 217, 2, 170);
        p5.ellipse(300, 120, 100);
        moves++;
        if(moves>wWidth*1.5){
            moves = -10;
            ellipseX = 200;
            ellipseY = -10;
        }
        if(ellipseY>305 && ellipseY<390){
            ellipseX += force.x;
            ellipseY += force.y;
        } else {
            ellipseY += 1;
        }
        p5.ellipse(ellipseX, ellipseY, 50);


        p5.quad(150,300,100,350,300,500,300,400);
    };

    return <FallingSketch setup={setup} draw={draw} />;
}

class FallingSketch extends Sketch {}

