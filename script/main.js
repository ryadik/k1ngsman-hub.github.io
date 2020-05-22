const menuButton = document.querySelector('#menu__burger');
const menuLinksContainer = document.querySelector('#menu__links');

menuButton.onclick = function(){
    menuLinksContainer.classList.toggle('active');
    menuButton.classList.toggle('active');
}

