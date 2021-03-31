var navEle = document.createElement("nav");
var pageContentEle = document.createElement("div");
var titleEle = document.createElement("h1");
var nameEle = document.createElement("h3");
var counterEle = document.createElement("div");
var increaseCounterButton = document.createElement("button");

navEle.classList.add("nav");

var counter = 0;

increaseCounterButton.innerHTML = "Increase Counter";
counterEle.innerHTML = "Counter: " + counter;

increaseCounterButton.addEventListener("click", function () {
  counter = counter + 1;
  counterEle.innerHTML = "Counter: " + counter;
});

pageContentEle.appendChild(titleEle);
pageContentEle.appendChild(nameEle);
pageContentEle.appendChild(increaseCounterButton);
pageContentEle.appendChild(counterEle);
document.body.appendChild(navEle);
document.body.appendChild(pageContentEle);

function app (){
  var pages = ["Home", "About", "Interact"];
  nav(pages);
  renderPage("Home");
}

function nav(pages) {
  for (var i = 0; i < pages.length; i++) {
    const pageButton = document.createElement("button");
    const navTitle = pages[i];
    pageButton.innerHTML = navTitle;
    pageButton.addEventListener("click", function () {
      renderPage(navTitle);
    });
    navEle.appendChild(pageButton);
  }
}

function renderPage(page) {
  if (page == "Home") {
    home();
  } else if (page == "About") {
    about();
  } else if (page == "Interact") {
    interact();
  }
}

function home() {
  titleEle.innerHTML = "Home";
  nameEle.innerHTML = "";
  counterEle.innerHTML = "";
  increaseCounterButton.style.visibility = "hidden";
}

function about() {
  titleEle.innerHTML = "About";
  nameEle.innerHTML = "Anitha S.";
  counterEle.innerHTML = "";
  increaseCounterButton.style.visibility = "hidden";
}

function interact() {
  titleEle.innerHTML = "";
  nameEle.innerHTML = "";
  increaseCounterButton.style.visibility = "visible";
  counterEle.innerHTML = "Counter: " + counter;
}

app();