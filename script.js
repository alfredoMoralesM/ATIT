const nav= document.querySelector('#nav');
const abrir= document.querySelector('#abrir');
const cerrar= document.querySelector('#cerrar');

abrir.addEventListener('click', ()=>{
    nav.classList.toggle('activo');
})

cerrar.addEventListener("click",()=>{
    nav.classList.remove('activo');
})


/*script del blog */

document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Crear un nuevo elemento de publicación
    const post = document.createElement('div');
    post.classList.add('post');

    // Agregar título y contenido a la publicación
    const postTitle = document.createElement('h2');
    postTitle.textContent = title;
    const postContent = document.createElement('p');
    postContent.textContent = content;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    // Agregar la nueva publicación al blog
    document.getElementById('blog-posts').appendChild(post);

    // Limpiar el formulario
    document.getElementById('post-form').reset();
});