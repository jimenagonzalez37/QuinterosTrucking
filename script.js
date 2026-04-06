let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide-header");
    } else {
        header.classList.remove("hide-header");
    }

    lastScroll = currentScroll;
});

const elements = document.querySelectorAll('.fade-in');

function showOnLoad(){
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 50){
el.classList.add('show');
}
});
}

window.addEventListener('scroll', showOnLoad);
window.addEventListener('load', showOnLoad);

const materiales = document.querySelectorAll('.material');

materiales.forEach(mat => {
    mat.addEventListener('click', () => {

        const activo = mat.classList.contains('activo');

        // resetear todo
        materiales.forEach(m => {
            m.classList.remove('activo');
            m.classList.remove('blur');
        });

        // si no estaba activo → activar
        if(!activo){
            mat.classList.add('activo');

            materiales.forEach(m => {
                if(m !== mat){
                    m.classList.add('blur');
                }
            });
        }

    });
});