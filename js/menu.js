var btnExpandir = document.querySelector('#btn-expand')
var menuSide = document.querySelector('.barra-flexivel')

btnExpandir.addEventListener('click' , function(){
    menuSide.classList.toggle('expandir')
})