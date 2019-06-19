
//===============MOUSEOVER============

const links = document.querySelectorAll('.nav-link');
links.forEach(item => item.addEventListener('mouseover', (event) =>{
    event.target.style.color = "orange";
    setTimeout(() => event.target.style.color = "", 500);
}));

//===============FOCUS============

links.forEach(item => item.addEventListener('focus', (event) =>{
    event.target.style.background = "#ff804c";
    setTimeout(() => event.target.style.background = "", 500);
}));

//===============DRAG============

// const h2 = document.querySelector('.intro h2');
// h2.addEventListener('dragstart', (event) =>{
//     event.stopPropagation();
//     // h2.style.color = "orange"; // target doesn`t work here
//     // event.currentTarget.style.color = 'orange'; //It works
//     event.target.style.color = 'orange'; / in order for it to work the targets draggable property needs to be set to true!
//     });

const h2 = document.querySelector('.intro h2');
h2.draggable = 'true';
h2.addEventListener('dragstart', (event) =>{
    event.target.style.color = 'orange';
});

//===============LOAD============

const logo = document.querySelector('.logo-heading');
window.addEventListener('load', event =>  logo.style.color = "orange")

//===============RESIZE============

window.addEventListener('resize', event => logo.textContent = "OOPS");

//===============SELECT============

const origin = document.querySelector('text-content input');
const copy = document.querySelector('#go');
origin.addEventListener('select', event =>{
    const select = event.target.value.substring(event.target.selectionStart,
        event.target.selectionEnd);
    copy.textContent = select;
});

//===============DBLCLICK============

const body = document.querySelector('body');
body.addEventListener('dblclick', event =>
    event.target.style.color = "pink");

//===============KEYDOWN============

document.addEventListener('keydown', event =>
                   alert(`KEY`));

//===============KEYDOWN============

window.addEventListener('scroll', event => alert(`SCROLL`));