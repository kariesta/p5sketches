import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function water(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);
    /*let noiseScale =0.005;
    let noiseVal;*/
    let scale = 15;
    let pMouse = [0,0];
    let mouseV, pMouseV, degree;
    let resting = 0;
    let parabolas = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        p5.frameRate(30);
    };

    const draw = p5 => {
        //p5.background(255, 130, 20);
        p5.background(42,111,219);

        p5.noStroke();
        p5.fill(255, 217, 2, 170);
        moves+=5;
        if(moves >= 180){
            moves = 0;
        }
        if(p5.frameCount%4 === 0){
            pMouse = [p5.mouseX, p5.mouseY];
        }

        if (resting > 0){
            p5.noFill();
            p5.stroke(255,255*resting);
            console.log(resting);
            //mouseV = p5.createVector(p5.mouseX,p5.mouseY);
            //pMouseV = p5.createVector(pMouse[0],pMouse[1]);
            //parabola(p5,pMouseV,mouseV,resting);
            console.log(""+pMouseV+","+mouseV+","+resting);
            parabolas.push([pMouseV,mouseV,1]);
            console.log(""+parabolas[parabolas.length-1][0]+","+parabolas[parabolas.length-1][1]+","+parabolas[parabolas.length-1][2]);

            resting -= 0.01;
            //resting = 0;
        }

        parabolas.forEach(para =>{
            para[2] -= 0.01;
        });
        parabolas = parabolas.filter(para => para[2] <= 0);

        parabolas.forEach(para =>{
            p5.noFill();
            p5.stroke(255,255*para[2]);
            parabola(p5,para[0],para[1],resting);//para[2]);
        });
        //noisyWater(p5,moves);
    };

    const mouseDragged = (p5) => {
        //parabola(p5)
        p5.background(42,111,219);
        p5.noFill();
        mouseV = p5.createVector(p5.mouseX,p5.mouseY);
        pMouseV = p5.createVector(pMouse[0],pMouse[1]);

        parabola(p5,pMouseV,mouseV,0);
        resting = 1;
    };

    const parabola = (p5, pV, cV, rest) => {
        const centerV = p5.createVector(0,0);
        const centralV = p5.createVector(0,1);

        let diff = pV.copy().sub(cV);
        degree = centralV.angleBetween(diff);
        //scale = mouseV.dist(pMouseV);
        scale = centerV.dist(diff);

        p5.push();
        p5.translate(cV.x, cV.y);
        p5.line(0,0,diff.x,diff.y);
        p5.rotate(degree);
        p5.scale(2-rest,2-rest);
        p5.beginShape();
        for( let i = -scale; i<=scale; i++) {
            let y = (i*i)/(scale*0.5*(2-rest));// /(p5.mouseY-20);
            p5.vertex(i,y-scale);
        }
        p5.endShape();
        p5.pop();
    };

    /*const noisyWater = (p5,moves) => {
        for (let y = 0; y < wHeight; y++) {
            for (let x = 0; x < wWidth; x++) {
                // noiseDetail of the pixels octave count and falloff value
                p5.noiseDetail(5, 0.5);
                noiseVal = p5.noise( x * noiseScale, y * noiseScale);
                if(noiseVal>p5.sin(moves)){
                    p5.stroke(42,111,219);
                } else if(noiseVal>p5.sin(moves-20)){
                    p5.stroke(129,233,230);
                } else {
                    p5.stroke(255);
                }
                //p5.stroke(noiseVal*255);
                p5.point(x, y);
            }
        }
    };*/

    return <WaterSketch setup={setup} draw={draw} mouseDragged={mouseDragged}/>;
}

class WaterSketch extends Sketch {}

