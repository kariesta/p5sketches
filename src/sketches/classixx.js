import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function classixx(){
    //let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);
    const unit = 20;
    let center;
    let img;
    let runner1,runner2;
    let colors;
    let degrees = 0, offsetX = 3, offsetY = 10;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        p5.imageMode(p5.CENTER);
        p5.colorMode(p5.HSB,255);
        center = p5.createVector(wWidth/2,wHeight/2);
        colors = pickColors(p5,19);
        runner1 = drawRunner(p5);
        colors = pickColors(p5,36); //19,20
        runner2 = drawRunner2(p5);
    };

    const draw = p5 => {
        p5.background(255);
        p5.translate(wWidth/2, wHeight/2);
        p5.rotate(45);
        let xOff = offsetX*p5.sin(-degrees);
        let yOff = offsetY*p5.cos(-degrees);
        p5.image(runner1,xOff,yOff);
        xOff = offsetX*p5.sin(-degrees+30);
        yOff = offsetY*p5.cos(-degrees+30);
        p5.image(runner2,unit+xOff,(unit*3)+yOff);

        degrees = (degrees+3)%360;
    };

    const pickColors = (p5,seed) => {
        p5.randomSeed(seed);
        return {
            head: p5.color(p5.random(0,255),255,255),
            leftLowerArm: p5.color(p5.random(0,255),255,255),
            leftUpperArm: p5.color(p5.random(0,255),255,255),
            shoulder: p5.color(p5.random(0,255),255,255),
            rightUpperArm: p5.color(p5.random(0,255),255,255),
            rightLowerArm: p5.color(p5.random(0,255),255,255),
            rightUpperLeg: p5.color(p5.random(0,255),255,255),
            leftLeg: p5.color(p5.random(0,255),255,255),
            rightLowerLeg: p5.color(p5.random(0,255),255,255),
        }

    };

    const drawRunner = (p5) => {
        let runny = p5.createGraphics(unit*8,unit*11);
        runny.background(0,0);
        runny.stroke(250);
        runny.strokeWeight(5);
        runny.strokeJoin(p5.ROUND);
        runny.fill(0);
        runny.translate(2.5,2.5);

        runny.fill(colors.leftLowerArm);
        runny.rect(0, 0, unit, unit*2.5,0,0,unit,unit);//left lowerarm
        runny.fill(colors.leftUpperArm);
        runny.quad(unit,0,unit*4,0,unit*3,unit,unit,unit); //left upperarm
        runny.fill(colors.shoulder);
        runny.triangle(unit*4,0,                       //sholder
            unit*4,unit*2,
            unit*2,unit*2);
        runny.fill(colors.head);
        runny.ellipse(unit*5, unit*0.8, unit*1.5);         //head
        runny.fill(colors.rightUpperArm);
        runny.quad(unit*2,unit*2,                  //right UpperArm
            unit*6,unit*2,
            unit*6,unit*3,
            unit,unit*3);
        runny.fill(colors.rightLowerArm);
        runny.rect(unit*6, unit*3, unit, -unit*2.5,0,0,unit,unit); //right lowerarm
        runny.fill(colors.rightUpperLeg);
        runny.rect(unit,unit*3,unit*4,unit,unit,0,0,unit);  //right upperLeg
        runny.fill(colors.leftLeg);
        runny.rect(unit, unit*4, unit, unit*6, 0,0,unit,unit);  //left leg
        runny.fill(colors.rightLowerLeg);
        runny.rect(unit*4, unit*4, unit, unit*2.5, 0,0,unit,unit);  //right lowerleg
        return runny;
    };

    const drawRunner2 = (p5) => {
        let runny = p5.createGraphics(unit*8,unit*11);
        runny.angleMode(p5.DEGREES);
        runny.background(0,0);
        runny.stroke(250);
        runny.strokeWeight(5);
        runny.strokeJoin(p5.ROUND);
        runny.fill(0);
        runny.translate(2.5,2.5);

        //runny.fill(colors.leftLowerArm);
        //runny.rect(0, 0, unit, unit*2.5,0,0,unit,unit);//left lowerarm
        //runny.fill(colors.leftUpperArm);
        //runny.quad(unit,0,unit*4,0,unit*3,unit,unit,unit); //left upperarm
        runny.fill(colors.shoulder);
        runny.triangle(unit*4,0,                       //sholder
            unit*4,unit*2,
            unit*2,unit*2);
        runny.fill(colors.head);
        runny.ellipse(unit*5, unit*0.8, unit*1.5);         //head
        runny.fill(colors.rightLowerArm);
        runny.rect(unit*6, unit*3, unit, -unit*2.5,0,0,unit,unit); //right lowerarm
        runny.fill(colors.leftLeg);
        runny.rect(unit*2,unit*3,unit*3.5,unit);  //left upperLeg
        runny.fill(colors.leftUpperArm);
        runny.rect(unit*4.5, unit*4, unit, unit*2.5, 0,0,unit,unit);  //left lowerleg
        runny.push();
        runny.translate(unit*2.5,-unit*1.5);//7runny.width/8);
        runny.rotate(45);
        runny.fill(colors.rightUpperLeg);
        runny.rect(unit*2,unit*3,unit*3.5,unit);  //right upperLeg
        runny.fill(colors.rightLowerLeg);
        runny.rect(unit*4.5, unit*4, unit, unit*2.5, 0,0,unit,unit);  //right lowerleg
        runny.pop();
        runny.fill(colors.rightUpperArm);
        runny.quad(unit*2,unit*2,                  //right UpperArm
            unit*6,unit*2,
            unit*6,unit*3,
            unit,unit*3);

        /*runny.fill(colors.leftLeg);
        //runny.rect(unit, unit*4, unit, unit*6, 0,0,unit,unit);  //left leg
        runny.fill(colors.leftLeg);
        runny.quad(unit, unit*3, unit*(1+Math.sqrt(2)), unit*3,290,290,300,300);  //left upperleg
        runny.fill(colors.leftUpperArm);
        //runny.rect(unit*4, unit*4, unit, unit*2.5, 0,0,unit,unit);  //left lowerleg
        */

        return runny;
    };

    return <ClassixxSketch setup={setup} draw={draw}/>;
}

class ClassixxSketch extends Sketch {}

