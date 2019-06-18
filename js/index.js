
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

const h2 = document.querySelector('.intro h2');
h2.addEventListener('drag', (event) =>{
    event.stopPropagation();
    alert( "welcome" )
    // event.target.style.color = "orange"; why it does not work
    });

//===============LOAD============

const logo = document.querySelector('.logo-heading');
logo.addEventListener('load', (event) => {
    event.target.style.color = 'orange';
});

//===============RESIZE============

const logo = document.querySelector('.logo-heading');
logo.addEventListener('load', (event) => {
    event.target.style.color = 'orange';
});


