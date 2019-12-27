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

// api img

const img = document.getElementById('api-img');
const img2 = document.getElementById('api-img2');
console.log(img);
const url = 'https://api.giphy.com/v1/gifs/translate?api_key=d6tnryBJfL052TAPNH5s0DRpGhI9EA8r&s=cats'

//using fetch
fetch(url, {mode: 'cors'}).then(function(response) {
  return response.json();
}).then(function(response) {
  img.src = response.data.images.original.url;
});

async function getCats(){
  /* No await 2 then
  fetch(url, {mode: 'cors'})
  .then((response) => {response.json()})
  .then((response) => {
    img2.src = response.data.images.original.url;
  })*/
  // first then into wait
  /*
  const response = await fetch(url, {mode: 'cors'})
  response.json().then((response) => {
    img2.src = response.data.images.original.url;
  })*/
  const response = await fetch(url, {mode: 'cors'});
  const catData = await response.json();
  img2.src = catData.data.images.original.url;
}
getCats();

