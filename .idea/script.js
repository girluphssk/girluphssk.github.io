const toggle = document.getElementById("mobileToggle");
const nav = document.getElementById("navLinks");

if(toggle){
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}