let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let text = document.getElementById('text');



button1.addEventListener('click', onbutton1Clicked);
button2.addEventListener('click', onbutton2Clicked);

function onbutton1Clicked() {
    document.getElementById('text').innerHTML = "Button 1 was clicked!"
}

function onbutton2Clicked() {
   document.getElementById('text').innerHTML = 'Button 2 was clicked!'
}