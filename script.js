window.addEventListener("scroll", () => {

const header =
document.querySelector(".header");

header.style.boxShadow =
window.scrollY > 50
? "0 5px 20px rgba(0,0,0,.3)"
: "none";

});
