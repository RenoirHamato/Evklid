/* SWIPER */
let swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  a11y: {
    enabled: false,
  },
});

/* TAB */
let howTab = document.querySelectorAll(".how__step");
let howTabBox = document.querySelectorAll(".how__box");

function openTab(tabId) {
  const newTab = document.querySelector(`[data-step="${tabId}"]`);
  const newTabBox = document.querySelector(`[data-target="${tabId}"]`);

  howTab.forEach((tab) => {
    tab.classList.remove("how__step--active");
    tab.setAttribute("aria-selected", "false");
  });

  howTabBox.forEach((tab) => {
    tab.classList.remove("how__box--active");
  });

  if (window.location.hash) {
    newTab.closest("section").scrollIntoView({
      behavior: "smooth",
    });
  }

  newTab.setAttribute("aria-selected", "true");
  newTab.classList.add("how__step--active");
  newTabBox.classList.add("how__box--active");
}

/* event 1 */
howTab.forEach(function (step) {
  step.addEventListener("click", function (e) {
    openTab(e.target.getAttribute("data-step"));
  });
});

/* event 2 */
document.addEventListener("DOMContentLoaded", function () {
  let idTab = window.location.hash;
  openTab(idTab || "#step-one");
});

/* event 3 */
window.addEventListener("hashchange", function () {
  let idTab = window.location.hash;
  openTab(idTab || "#step-one");
});

/* ACCORDION */
new Accordion(".questions__list", {
  elementClass: "questions__item",
  triggerClass: "questions__button",
  panelClass: "questions__content",
  activeClass: "questions__button--active",
});

/* BUTTON-BURGER AND BUTTON-SEARCH */
let burger = document.querySelector(".header__burger");
let line = document.querySelectorAll(".header__line");
let menu = document.querySelector(".header__menu");

var searchButton = document.querySelector(".header__search-button");
var headerInput = document.querySelector(".header__input");
let searchBox = document.querySelector(".header__search-box");
let searchClosed = document.querySelector(".header__closed-search");
let animation = document.querySelector(".header__burger-animation");

/* search */
searchButton.addEventListener("click", function () {
  searchBox.classList.add("header__search-box--visible");
  searchClosed.classList.add("header__search-box--visible");
  searchBox.classList.add("header__search-box--active");
  searchClosed.classList.add("header__search-box--active");
  searchButton.classList.add("header__search-button--active");
  searchButton.removeAttribute("aria-label");
  searchButton.setAttribute("aria-label", "отправить запрос");
  burger.classList.add("header__burger-search--active");
  animation.classList.add("header__burger-search--active");
  headerInput.focus();
  setTimeout(function () {
    searchButton.setAttribute("form", "header-search-form");
  }, 1);

  document.body.classList.remove("header__menu--stop-scroll");

  searchBox.addEventListener("click", function (g) {
    g.stopPropagation();
  });

  document.addEventListener("click", function (g) {
    if (!searchButton.contains(g.target)) {
      setTimeout(function () {
        searchBox.classList.remove("header__search-box--visible");
        searchClosed.classList.remove("header__search-box--visible");
      }, 500);
      searchBox.classList.remove("header__search-box--active");
      searchClosed.classList.remove("header__search-box--active");
      searchButton.classList.remove("header__search-button--active");
      searchButton.removeAttribute("form", "header-search-form");
      searchButton.removeAttribute("aria-label");
      searchButton.setAttribute("aria-label", "открыть поле поиска");
      burger.classList.remove("header__burger-search--active");
      animation.classList.remove("header__burger-search--active");
    }
  });
});

searchClosed.addEventListener("click", function () {
  setTimeout(function () {
    searchBox.classList.remove("header__search-box--visible");
    searchClosed.classList.remove("header__search-box--visible");
  }, 500);
  searchBox.classList.remove("header__search-box--active");
  searchClosed.classList.remove("header__search-box--active");
  searchButton.classList.remove("header__search-button--active");
  searchButton.removeAttribute("aria-label");
  searchButton.setAttribute("aria-label", "открыть поле поиска");
  burger.classList.remove("header__burger-search--active");
  animation.classList.remove("header__burger-search--active");
  setTimeout(function () {
    searchButton.focus();
  }, 1);
});

/* burger */
burger.addEventListener("click", function () {
  setTimeout(function () {
    burger.classList.toggle("header__burger--active");
    searchButton.classList.toggle("header__search--index-active");
    searchClosed.classList.toggle("header__search--index-active");
    animation.classList.toggle("header__burger-animation--active");
    line.forEach(function (e) {
      e.classList.toggle("header__line--active");
    });
    burger.classList.toggle("header__burger--passive");
    animation.classList.toggle("header__burger-animation--passive");
    line.forEach(function (e) {
      e.classList.toggle("header__line--passive");
    });
  }, 150);
  menu.classList.toggle("header__menu--active");
  searchButton.classList.toggle("header__search--index-passive");
  searchClosed.classList.toggle("header__search--index-passive");

  document.body.classList.toggle("header__menu--stop-scroll");

  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  document.addEventListener("click", function (e) {
    if (!burger.contains(e.target)) {
      menu.classList.remove("header__menu--active");
      setTimeout(function () {
        burger.classList.remove("header__burger--active");
        searchButton.classList.remove("header__search--index-active");
        searchClosed.classList.remove("header__search--index-active");
        animation.classList.remove("header__burger-animation--active");
        line.forEach(function (e) {
          e.classList.remove("header__line--active");
        });
        burger.classList.add("header__burger--passive");
        searchButton.classList.add("header__search--index-passive");
        searchClosed.classList.remove("header__search--index-passive");
        animation.classList.add("header__burger-animation--passive");
        line.forEach(function (e) {
          e.classList.add("header__line--passive");
        });
      }, 150);
      document.body.classList.remove("header__menu--stop-scroll");
    }
  });
});
