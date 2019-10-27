'use strict';
//function for convert rgb to hex
const hexColor = (arr) =>  arr.map(el => {
        const val = el.toString(16);
        return val.length === 1 ? `0${val}` : val.toString();
    }).join('');
