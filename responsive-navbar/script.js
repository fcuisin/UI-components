const slice = document.querySelector(".slice");
const navLinks = document.querySelector(".nav-links");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

slice.addEventListener("click", function() {

  navLinks.classList.toggle("open");
  line1.classList.toggle("top-line");
  line2.classList.toggle("central-line");
  line3.classList.toggle("bottom-line");

})
