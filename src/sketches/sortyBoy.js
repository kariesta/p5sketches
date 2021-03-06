import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

//TODO add arrows for sorting
//TODO add other sortings like "deshuffle"
export default function sortyBoy(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const positionStyle = 'fixed';
    //it can be static, fixed, relative, sticky, initial or inherit
    let sortButton, shuffleBottton, toSortIndex = 0, toShuffleIndex = 0;
    let numOfStones = 12, circleRadius = wWidth*0.3, stoneRadius = 20;
    let isSorting = false, isShuffled = false;
    class StonePosition {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    class StoneColor {
        constructor(i,c) {
            this.nr = i;
            this.color = c;
        }
    }
    let stonePositions = [new StonePosition(0,0)],stoneColors = [new StoneColor(0,0)];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        p5.frameRate(4);
        p5.colorMode(p5.HSB, wHeight, wHeight, wHeight);
        initArrays(p5);
        const {x: buttonBaseX, y: buttonBaseY} = canvasParentRef.getBoundingClientRect();

        //sort knapp
        sortButton = p5.createButton('insertion sort');
        sortButton.position(buttonBaseX+30, buttonBaseY+55, positionStyle);
        sortButton.mousePressed(sortStones);

        //shuffleknapp
        shuffleBottton = p5.createButton('shuffle');
        shuffleBottton.position(buttonBaseX+130, buttonBaseY+55, positionStyle);
        shuffleBottton.mousePressed(shuffleStones);
    };

    const draw = p5 => {
        p5.background(80);
        p5.noStroke();
        p5.fill(255);


        for (let i = 0; i<stoneColors.length; i++){
            let pos = stonePositions[i];
            let col = stoneColors[i];
            p5.fill(col.color);
            p5.ellipse(pos.x,pos.y,stoneRadius,stoneRadius);
            p5.text(col.nr,pos.x-10,pos.y-10);
        }
        if(isShuffled){
            shufflingStep();
        }
        if(isSorting){
            sortingStep();
        }
    };

    const initArrays = (p5) => {
        stoneColors = [];
        stonePositions = [];
        for (let i = 0; i<numOfStones; i++){
            stoneColors.push(new StoneColor(i, p5.color(i*(360/numOfStones),wHeight,wHeight)));
            let x = (wWidth/2)+p5.cos((i/numOfStones)*360)*circleRadius;
            let y = (wHeight/2)+p5.sin((i/numOfStones)*360)*circleRadius;
            stonePositions.push(new StonePosition(x,y));
        }
    };

    const sortingStep = () => {
        let smallest = stoneColors.filter(it => it.nr === toSortIndex)[0];
        let smallestIndex = stoneColors.indexOf(smallest);
        [stoneColors[smallestIndex], stoneColors[toSortIndex]] = [stoneColors[toSortIndex], stoneColors[smallestIndex]];
        toSortIndex+=1;
        if (toSortIndex === numOfStones){
          isSorting = false;
        }
    };

    const shufflingStep = () => {
        let randomIndex = Math.floor(Math.random() * toShuffleIndex);
        // And swap it with the current element.
        [stoneColors[randomIndex], stoneColors[toShuffleIndex]] = [stoneColors[toShuffleIndex], stoneColors[randomIndex]];
        toShuffleIndex++;
        if (toShuffleIndex === numOfStones){
            isShuffled = false;
        }
    };

    const sortStones = () => {
        //console.log("insertion sort");
        isSorting = true;
        isShuffled = false;
        toSortIndex = 0;
    };

    const shuffleStones = () => {
        //console.log("shuffle");
        isShuffled = true;
        isSorting = false;
        toShuffleIndex = 0;
    };

  return <SortyBoySketch setup={setup} draw={draw} />;
}

class SortyBoySketch extends Sketch {}