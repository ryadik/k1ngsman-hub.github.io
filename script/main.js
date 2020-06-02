//burger menu
const menuButton = document.querySelector('#menu__burger'); // get burgegBtn
const menuLinksContainer = document.querySelector('#menu__links'); // get div.menu__links
const bodyTag = document.querySelector('body');

menuButton.onclick = function(){
    menuLinksContainer.classList.toggle('active'); // take active class to div.menu__links
    menuButton.classList.toggle('active'); // take active class to burgerBtn
    bodyTag.classList.toggle('active'); // take active class to body
}


// smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
