let newX = 0, newY = 0, startX = 0, startY = 0;
const card = document.getElementById('card');
card.addEventListener('mousedown', mouseDown);
function mouseDown(e){
startX = e.clientX
startY = e.clienty
document.addEventListener('mousemove', mouseMove)
document.addEventListener('mouseup', mouseUp)
}
function mouseMove(e){
newX = startX - e.clientX
newY = startY - e.clientY
startX = e.clientX
startY = e.clientY
card.style.top = (card.offsetTop - newY) + 'px' 
card.style.left = (card.offsetLeft - newX) + 'px'
}
function mouseUp(e){
document.removeEventListener('mousemove', mouseMove)
document.getElementById('card').addEventListener('click', posicao);
}

function posicao(e) {
    var el = this;
    var coordenadas = el.getBoundingClientRect(); 
    console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)
    if(coordenadas.left<0){  
        card.style.left = 0 + 'px'
    }
    if(coordenadas.top<0){
        card.style.top = 0 + 'px' 
    }
}


