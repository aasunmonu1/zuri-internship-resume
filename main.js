var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML =
    '<h1 class="hero-title">' + this.txt + "<span>!</span></h1>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// window.addEventListener("scroll", (e) => {
//   console.log(e);
// });

(topMenu = document.getElementById("header-list")),
  (topMenuHeight = topMenu.offsetHeight + 15),
  // All list items
  (menuItems = Array.from(topMenu.getElementsByTagName("a"))),
  // Anchors corresponding to menu items
  (scrollItems = menuItems.map((item) => {
    const hash = window.location.hash;
    if (item.getAttribute("href") === hash) {
      item.classList.add("active");
      console.log(item);
      return;
    }
  }));

// Toggle element visibility
var showNav = false;
var elem = document.getElementById("header-list-sm");
var menu = document.getElementById("menu");
var closeMenu = document.getElementById("close");

if (!showNav) {
  menu.style.display = "block";
  closeMenu.style.display = "none";
  elem.style.display = "none";
}

function toggle() {
  showNav = !showNav;
  // If the element is visible, hide it
  if (!showNav) {
    hide();
    return;
  }

  // Otherwise, show it
  show();
}

// Show an element
var show = function () {
  console.log("show");
  console.log(showNav);
  menu.style.display = "none";
  closeMenu.style.display = "block";
  elem.style.display = "block";
};

// Hide an element
var hide = function () {
  console.log("hide");
  console.log(showNav);
  menu.style.display = "block";
  closeMenu.style.display = "none";
  elem.style.display = "none";
};
