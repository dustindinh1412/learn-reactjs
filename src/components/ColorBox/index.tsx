import React, { useState } from 'react';

import './style.css';

const colors = ['black', 'red', 'blue', 'green', 'yellow'];
function ColorBox() {

    const [color, setColor] = useState('black');
    
    function changeColor() {
        setColor( colors[generateIntegerNumber(5)]);
    }
    return (
        <div className="color-box" onClick={ e => changeColor()} style={{backgroundColor: color}}>
            
        </div>
    );
}


function generateIntegerNumber(max: number) {
   return Math.floor(Math.random() * Math.floor(max));
}

export default ColorBox