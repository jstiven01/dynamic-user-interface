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

///JSON
const student = {
  name:'Liset',
  age: 35,
  hobbies: ['aaaaa','bbbb','ccccc'],
  car: {
    brand: 'chevrolet',
    year: 2018,
  }
}

console.log(student);
const studentStringfy = JSON.stringify(student);
console.log(typeof studentStringfy, studentStringfy);
const JSONtoStudent = JSON.parse(studentStringfy);
console.log(typeof JSONtoStudent, JSONtoStudent);