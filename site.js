window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 200 ) {
        document.getElementById('root').classList.add("changeColor");
    } 
    else {
        document.getElementById('root').classList.remove("changeColor");
    }
};


var navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', smoothScroll)
} 

function smoothScroll(){
    let item = document.getElementById(this.dataset.scroll);
    let wrapper = document.documentElement
    let count = item.offsetTop - wrapper.scrollTop - 60 // xx = any extra distance from top ex. 60
    wrapper.scrollBy({top: count, left: 0, behavior: 'smooth'})
}




        
