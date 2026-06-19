const text =
[
"Web Developer",
"CSE Student",
"Photographer",
"Creative Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type, 1200);

}else{

setTimeout(type, 120);

}

})();

window.addEventListener("scroll", () => {

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach(item => {

const top =
item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add("active");
}

});

});

const topBtn =
document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";
}
};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};
