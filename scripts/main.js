var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-photo.jpg') {
      myImage.setAttribute ('src','images/my-photo-2.jpg');
    } else {
      myImage.setAttribute ('src','images/my-photo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent ='' +  myName +',مرحبا بك في موقعي';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent =  '' + storedName +',مرحبا بك في موقعي';
}
myButton.onclick = function() {
  setUserName();
}