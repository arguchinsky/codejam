'use strict';
//function for convert rgb to hex
const hexColor = (arr) =>  arr.map(el => {
        const val = el.toString(16);
        return val.length === 1 ? `0${val}` : val.toString();
    }).join('');

const draw = (matrix, type) => {
    const canvas = document.getElementById('canvas');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const width = canvasWidth / type;
    const height = canvasHeight / type;
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    switch(type){
        case '4':
            matrix.map((row, ri) => {
                row.map((color, ci) => {
                    ctx.fillStyle = `#${color}`;
                    ctx.fillRect(ri*width, ci*height, width, width);
                })
            })
        break;
        case '32':
            matrix.map((row, ri) => {
                row.map((color, ci) => {
                    ctx.fillStyle = `#${hexColor(color)}`;
                    ctx.fillRect(ri*width, ci*height, width, width);
                })
            })
            break;
        case 'img':
            const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
                }
                img.src = './assets/image/image.png';
            break;
        default:
            alert('error: unknown matrix type');
            break;
    }
}
    