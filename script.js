window.onload = function(){
  setTimeout(function(){
    document.getElementById("fadein").remove();
  },1000);
};

function showSection() {
  var i;
  for (i = 0; i < links.length; i += 1) {
      document.getElementById(links[i].href.split('#')[1]).className = 'hidden';
  }
  document.getElementById(this.href.split('#')[1]).className = '';
  return false;
}
function createShowSection(links) {
  return showSection;
}
var sections = document.getElementById('sections'),
  links = sections.getElementsByTagName('a'),
  showSection = createShowSection(links),
  i;
for (i = 0; i < links.length; i += 1) {
  links[i].onclick = showSection;
}
showSection();

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

// const card = document.querySelector(".card__inner");

// card.addEventListener("click", function (e) {
//   card.classList.toggle('is-flipped');
// });


// var topShelf = document.getElementById("topShelf");
// var flower = document.getElementById("flower");
// var concentrates = document.getElementById("concentrate");

// function myShelf () {
//  if (topShelf.style.display === "none") {
//   topShelf.style.display = "block";
//  } else {
//   flower.style.display ="none";
//   concentrates.style.display ="none";
//  }
  
// }
// function myFlower () {

  
// }
// function myConcentrate () {

  
// }

