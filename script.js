// Show the button when the user scrolls down 200px
window.onscroll = function () {
  const button = document.getElementById("toTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Scroll to top when the button is clicked
document.getElementById("toTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



