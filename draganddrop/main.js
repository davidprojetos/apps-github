et newX = 0, newy = 0, startX = 0, startY = 0;

const card = document.getElementById('card'); card.addEventListener('mousedown', mouseDown);

Function mouseDown(e){

startx = e.clientX

starty e.clienty

document.addEventListener('mousemove', mouseMove)

document.addEventListener('mouseup', mouseUp)

}


function mouseMove(e){

newx startX e.clientx

newy startY e.clienty

startx = e.clientX

startY = e.clienty

card.style.top = (card.offsetTop - newY) + 'px' card.style.left = (card.offsetLeft - newX) + 'px'

console.log(newX, newY)

}

function mouseUp(e){

document.removeEventListener('mousemove', mouseMove)

}