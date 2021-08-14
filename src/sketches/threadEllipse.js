import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function threadEllipse(){
    const [wWidth,wHeight] = calulateDimentions(window);
    //const dist = (wWidth/3)*1.2;
    let center,c1,c2,eDist;
    const margin = 0;
    let mouseV,thirdPoint;
    let points = [];


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        center = p5.createVector(wWidth/2,wHeight/2);
        c1 = p5.createVector(wWidth/3,wHeight/2);
        c2 = p5.createVector(wWidth*2/3,wHeight/2);
        eDist = c1.dist(c2)*1.3;
        mouseV = p5.createVector(p5.mouseX,p5.mouseY);
        thirdPoint= mouseV;
    };

    const draw = p5 => {
        p5.background(231, 70, 69);
        //p5.background(251, 119, 86);

        //p5.stroke(250,205,96);
        p5.stroke(251, 119, 86);
        p5.strokeWeight(4);
        p5.line(c1.x,c1.y,p5.mouseX,p5.mouseY);
        p5.line(c2.x,c2.y,p5.mouseX,p5.mouseY);
        p5.stroke(251, 119, 86, 200);
        p5.line(wWidth/2,wHeight/2,p5.mouseX,p5.mouseY);

        if(p5.mouseIsPressed){
            //define
            mouseV = p5.createVector(p5.mouseX,p5.mouseY);
            thirdPoint= mouseV;
            let mouseDir = mouseV.sub(center);//p5.createVector((wWidth/2),(wHeight/2)-p5.mouseY);
            let dist1 =  c1.dist(mouseV);
            let dist2 =  c2.dist(mouseV);
            let rel = dist1+dist2;
            p5.text(rel,20,20);

            while (rel > eDist+margin){
                mouseDir = mouseDir.mult(0.95);
                thirdPoint = center.copy().add(mouseDir);
                dist1 =  c1.dist(thirdPoint);
                dist2 =  c2.dist(thirdPoint);
                rel = dist1+dist2;
            }

            while (rel < eDist-margin){
                mouseDir = mouseDir.mult(1.1);
                thirdPoint = center.copy().add(mouseDir);
                dist1 =  c1.dist(thirdPoint);
                dist2 =  c2.dist(thirdPoint);
                rel = dist1+dist2;
            }
            points.push(thirdPoint);
        }
        p5.stroke(253, 250, 102);
        p5.line(c1.x,c1.y,thirdPoint.x,thirdPoint.y);
        p5.line(c2.x,c2.y,thirdPoint.x,thirdPoint.y);

        points.forEach(p => {
            p5.point(p.x,p.y);
        });

        p5.noStroke();
        p5.fill(253, 250, 102);
        p5.ellipse(c1.x,c1.y,10,10);
        p5.ellipse(c2.x,c2.y,10,10);
        p5.ellipse(p5.mouseX,p5.mouseY,10,10);

        p5.noFill();
        p5.stroke(253, 250, 102,50);
        p5.ellipse(wWidth/2,wHeight/2,(wWidth/3)*1.4,wHeight*0.2)
    };

    return <ThreadEllipseSketch setup={setup} draw={draw} />;
}

class ThreadEllipseSketch extends Sketch {}

