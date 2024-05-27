const nav= document.querySelector('#nav');
const abrir= document.querySelector('#abrir');
const cerrar= document.querySelector('#cerrar');

abrir.addEventListener('click', ()=>{
    nav.classList.toggle('activo');
})

cerrar.addEventListener("click",()=>{
    nav.classList.remove('activo');
})