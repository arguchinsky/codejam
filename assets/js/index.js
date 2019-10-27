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

const chooseHandler = (event) => {
    const target = event.target.closest('li').id;
    switch(target){
    case '4':
        fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
        .then(response => response.json()).then(data => {
            const matrix = data;
            draw(matrix , target);
        });
        break;
    case '32':
        fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
        .then(response => response.json()).then(data => {
            const matrix = data;
            draw(matrix , target);
        });
        break;
    case 'img':
        draw(null, 'img');
        break;
    }
}
    