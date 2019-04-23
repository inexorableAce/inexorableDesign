var navLinks = document.querySelectorAll('.scrollLink');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', smoothScroll)
} 

function smoothScroll(e){
    e.preventDefault();
    let item = this.getAttribute("href");
    document.querySelector(item).scrollIntoView({ behavior: 'smooth' });
}




        
