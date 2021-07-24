import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "../utils";

export default function simple(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let points = [];
    let rotation = 5;
    let ellipseaddon = 80;
    let betweenfocals;
    let length;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        // Sets the screen to be 720 pixels wide and 400 pixels high
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        betweenfocals = Math.sqrt(Math.pow(wWidth/2,2)+Math.pow(wHeight/2,2));
        length = (wWidth/2)+ellipseaddon;
    };

    const draw = p5 => {
        backing(p5);

        //rotating lines
        p5.line(wWidth/4,wHeight/2,(wWidth*3/4)+Math.sqrt(800)*p5.cos(rotation),(wHeight/2)-Math.sqrt(800)*p5.sin(rotation));
        p5.line(wWidth*3/4,wHeight/2,(wWidth*3/4)+Math.sqrt(800)*p5.cos(rotation),(wHeight/2)-Math.sqrt(800)*p5.sin(rotation));
        let i = 1;
        let sum = 0;
        let a = 0;
        let b = 0;
        while(sum<length){
            //for(i = 1; i<100; i++){
            //a = Math.sqrt(Math.pow(i*cos(rotation),2)+Math.pow(i*sin(rotation),2));
            a = Math.sqrt(Math.pow(i*p5.cos(rotation),2)+Math.pow(i*p5.sin(rotation),2));
            b = Math.sqrt(Math.pow((i+betweenfocals)*p5.cos(rotation),2)+Math.pow((i+betweenfocals)*p5.sin(rotation),2));
            sum = a+b;
            i++;
            p5.line(10,10*i,i*p5.cos(rotation),10*i);
            p5.line(10,5+(10*i),i*p5.sin(rotation),5+10*i);
        }

        p5.text(sum,10,40);
        p5.text(length,10,50);
        let x = (wWidth/4)+(a*p5.cos(rotation+45));
        let y = (wHeight*3/4)+(b*p5.sin(rotation+45));
        p5.stroke(50,150,50);
        p5.line(wWidth/4,wHeight/2,x,y);
        p5.stroke(150,50,50);
        p5.line(wWidth*3/4,wHeight/2,x,y);
        p5.line(wWidth/4,wHeight/2,p5.mouseX,p5.mouseY);
        p5.line(wWidth*3/4,wHeight/2,p5.mouseX,p5.mouseY);
        points.push([(wWidth/4)-(a*p5.sin(rotation+45)),(wHeight*3/4)+b*p5.cos(rotation+45)]);

        p5.stroke(50);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
        p5.line(0,wHeight/2,wWidth,wHeight/2);
        points.forEach((p) => {
            p5.point(p[0],p[1]);
        });

        p5.line(wWidth/2,wHeight/2,(wWidth/2)+(50*p5.sin(rotation)),(wHeight/2)+(50*p5.cos(rotation)));
        p5.line(wWidth/2,wHeight/2,(wWidth/2)+(100*p5.cos(rotation)),(wHeight/2)+(100*p5.sin(rotation)));
        for (let j = 0;j<20;j++){
            p5.line((wWidth/2)-50+(j*5),wHeight/2,(wWidth/2)-50+(j*5),(wHeight/2)-(25*p5.sin((180/20)*j)));
            p5.line((wWidth/2)-50+(j*5),wHeight/2,(wWidth/2)-50+(j*5),(wHeight/2)+(25*p5.sin((180/20)*j)));

            p5.line(wWidth/2,  (wHeight/2)-25+(j*2.5), (wWidth/2)-50*p5.cos((180/20)*j), (wHeight/2)-25+(j*2.5));
            p5.line(wWidth/2,  (wHeight/2)-25+(j*2.5), (wWidth/2)+50*p5.cos((180/20)*j), (wHeight/2)-25+(j*2.5));
        }

        rotation = (rotation%360)+1;
    };

    function backing(p5) {
        p5.background(135, 206, 235);
        p5.noStroke();
        p5.fill(255);
        p5.ellipse(wWidth/2,wHeight/2,100,50,150);
        p5.stroke(10);
        p5.strokeWeight(10);
        p5.point(wWidth/4,wHeight/2);  //point(width*3/4,height/4);
        p5.point(wWidth*3/4,wHeight/2);  //point(width/4,height*3/4);
        p5.strokeWeight(1);
        p5.stroke(150,50,50);
    }

    return <Sketch setup={setup} draw={draw} />;
}