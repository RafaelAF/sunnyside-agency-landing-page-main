let btnMenu = document.querySelector('#hamburger');


btnMenu.addEventListener('click', ()=>{
    document.querySelector('#menu').classList.toggle('menuOpen');
});