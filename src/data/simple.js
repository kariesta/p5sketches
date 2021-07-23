import React from 'react';
import Sketch from "react-p5";

export default function simple(){
    let moves = 0;
    const setup = (p5, canvasParentRef) => {
        const { innerWidth: wWidth, innerHeight: wHeight } = window;
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.fill(255, 130, 20);
        p5.ellipse(100+moves, 100+moves, 100+moves);
        p5.ellipse(300, 100, 100);
        moves++;
    };

    return <Sketch setup={setup} draw={draw} />;
}

