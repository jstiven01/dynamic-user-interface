import './style.css';
//import './dropdown'
console.log("webpack running");

const Site = document.querySelector('#site');


function dropDownEvent() {
    const ulSite = document.querySelector('#site-list');
    ulSite.classList.toggle('display-none')
}
Site.addEventListener('click',dropDownEvent);

var dropdown = require('dropdown-menu')
var el = document.getElementById('link')
var d = dropdown(el)
d.on('select', function (li) {
  console.log(li)
})