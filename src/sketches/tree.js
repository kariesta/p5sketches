import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function tree(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const leaf = 4;
    let moves = 0, starting = 20;
    let allLines = [], activepoints= [], newActives = [];
    let grayGreen,beigeGreen,lightGreen,leafGreen,darkGreen;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        grayGreen = p5.color(154, 167, 153);
        beigeGreen = p5.color(172, 179, 135);
        lightGreen = p5.color(192, 206, 149);
        leafGreen =  p5.color(97, 113, 59);
        darkGreen =  p5.color(70, 79, 41);

        for(let i = 0; i<starting; i++) {
            activepoints.push([p5.random(wWidth/3,wWidth*2/3),wHeight])
        }
    };

    const draw = p5 => {
        if(moves>=50){
            foreground(p5,0.4,40);
            return
        }
        background(p5);
        foreground(p5,0.5,80);
        //foreground(p5,0.5,50);

        p5.strokeWeight(1);
        p5.stroke(29, 33, 14);

        //lines
        allLines.forEach(li => {
            p5.line(li[0],li[1],li[2],li[3])
        });

        //leaves
        allLines.forEach(li => {
            if (li[3] < wHeight / 2 && p5.random(0, 1) > 0.6) {
                p5.stroke(leafGreen);
                p5.strokeWeight(3);
                let degree = p5.random(0, 360);
                p5.line(li[2], li[3], li[2] + p5.sin(degree) * leaf, li[3] + p5.cos(degree) * leaf);
                degree = p5.random(0, 360);
                p5.line(li[2], li[3], li[2] + p5.sin(degree) * leaf, li[3] + p5.cos(degree) * leaf);
            }
        });

        activepoints.forEach( p => {
            //calculate branching
            if(p5.random(0,1) === 0) {
                calculateNext(p5,p);
            }
            //calculate next active point
            calculateNext(p5,p);
        });
        activepoints = newActives;
        newActives = [];
        moves++;

        foreground(p5,0.01,40);
    };

    const background = (p5) => {
        p5.noStroke();

        p5.background(154, 167, 153);

        for(let i = 0;i<wHeight*0.6;i++){
            let lerpStep = 1/(wHeight*0.3);
            let ellipseColor = grayGreen;
            if(i<wHeight*0.3){
                ellipseColor = p5.lerpColor(grayGreen,beigeGreen,lerpStep*i);
            } else {
                ellipseColor = p5.lerpColor(beigeGreen,lightGreen,lerpStep*(i-(wHeight*0.3)));
            }
            p5.fill(ellipseColor);
            p5.ellipse((wWidth/3),wHeight*0.1,(wWidth*1.8)-(i*3));

            //p5.stroke(0);
            //p5.strokeWeight(0.5);
            //p5.line(0,wHeight/2,wWidth,wHeight/2);
            //p5.line(wWidth/2,0,wWidth/2,wHeight);
        }
    };

    const foreground = (p5,offset,grassHeight) => {
        /*p5.background(91, 174, 222);
        p5.background(192, 206, 149);
        p5.background(172, 179, 135);
        p5.background(154, 167, 153);*/
        p5.noStroke();
        let noiseScale=0.02;
        let grassColor;
        for (let x=0; x < wWidth; x++) {
            let noiseVal = p5.noise((p5.mouseX+x)*noiseScale+offset, p5.mouseY*noiseScale);
            grassColor = p5.lerpColor(darkGreen,leafGreen,noiseVal);
            p5.stroke(grassColor);
            p5.line(x, wHeight-noiseVal*grassHeight, x, wHeight);
        }
        //p5.quad(wWidth/3,wHeight-20,wWidth*2/3,wHeight-20,wWidth*2/3,wHeight,wWidth/3,wHeight);
    };

    const calculateNext = (p5,p) => {
        if(p[1]>wHeight/2){ //stamme
            let p2;
            if(p[0]>wWidth/2){
                p2 = [p[0]+p5.random(-20,5),p[1]+p5.random(-20,0)];
            } else {
                p2 = [p[0]+p5.random(-5,20),p[1]+p5.random(-20,0)];
            }
            allLines.push([p[0],p[1],p2[0],p2[1]]);
            newActives.push(p2);
        } else { //korne
            let p2 = [p[0]+p5.random(-30,+30),p[1]+p5.random(-30,20)];
            allLines.push([p[0],p[1],p2[0],p2[1]]);
            newActives.push(p2);
        }
    };

    return <TreeSketch setup={setup} draw={draw} />;
}

class TreeSketch extends Sketch {}

