cards = document.querySelectorAll('.slide');
function ch (event) {
for (let i=0; i<cards.length;i++){
    cards[i].classList.remove('act')
}
event.target.classList.add('act')
}
for (let i=0; i<cards.length;i++){
    cards[i].addEventListener('click',ch) 
}