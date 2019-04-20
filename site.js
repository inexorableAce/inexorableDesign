window.onscroll = function () {
    if (window.scrollY >= 200 ) {
        document.getElementById('root').classList.add("changeColor");
    } 
    else {
        document.getElementById('root').classList.remove("changeColor");
    }
};



// var navLinks = document.querySelectorAll('nav a');

// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', smoothScroll)
// } 

// function smoothScroll(e){
//     e.preventDefault();
//     let item = document.querySelector(this.getAttribute("href"));
//     let wrapper = document.documentElement
//     let count = item.offsetTop - wrapper.scrollTop - 60 // xx = any extra distance from top ex. 60
//     wrapper.scrollBy({top: count, left: 0, behavior: 'smooth'})
// }




        
