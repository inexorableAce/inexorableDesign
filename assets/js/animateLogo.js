var start = document.getElementById('logo');
var startHtml = '' 
for (var i = 0; i < start.innerText.length; i++) { 
    if (start.innerText[i] != '\n'){
        startHtml += '<i class="letter">' + start.innerText[i] + '</i>';
    }
    else{
        startHtml += '<br>'
    }
        
}

start.innerHTML = startHtml;
var letters = document.getElementsByClassName('letter')
var time = 0; 
var diff = 30;
var minTime = 0;
var maxTime = 1000;
    
// t: current time, b: begInnIng value, c: change In value, d: duration
function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}  

    
for (let i = 0; i < letters.length; ++i) {
    (function (i) {
        setTimeout(function () {
            letters[i].classList.add('in')
        }, (100-i*3)*i);
    })(i);
};