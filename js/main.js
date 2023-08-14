var navItems = document.querySelectorAll("#navbar a");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    document.querySelector("#navbar a.active").classList.remove("active");
    e.target.classList.add("active");
  });
});

var container = document.querySelector("main");
var links = document.querySelectorAll("#navbar a");

var loadContent = (url) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching content:", error);
    });
};

var selectContent = (event) => {
  event.preventDefault();
  var url = event.target.getAttribute("href");
  loadContent(url);
};

links.forEach((link) => {
  link.addEventListener("click", selectContent);
});

loadContent("partials/home.html");
