/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(() => {
  const e = document.querySelector(".form-hotel-search"),
        t = document.querySelector(".input-arrival-date"),
        o = document.querySelector(".form-hotel-search-container"),
        a = document.querySelector(".manage-hotel-search-button"),
        r = (document.querySelector(".hotel-search-button"), document.querySelectorAll(".date-input")),
        l = document.querySelectorAll(".number-input");
  let s = !0,
      c = "",
      i = "";
  o.classList.add("form-animation-hide"), e.classList.toggle("form-hotel-search-hide");

  try {
    c = localStorage.getItem("countAdults"), i = localStorage.getItem("countChildren");
  } catch (e) {
    s = !1;
  }

  (c || i) && (l[0].value = c, l[1].value = i), a.addEventListener("click", function () {
    1 == o.classList.contains("form-animation-hide") ? (e.classList.toggle("form-hotel-search-hide"), o.classList.remove("form-animation-hide"), t.focus(), o.classList.add("form-animation-show")) : (o.classList.remove("form-animation-show"), o.classList.add("form-animation-hide"), e.classList.toggle("form-hotel-search-hide"));
  }), e.addEventListener("submit", function (e) {
    r[0].value && r[1].value && l[0].value && l[1].value && 0 != l[0].value ? s && (localStorage.setItem("countAdults", l[0].value), localStorage.setItem("countChildren", l[1].value)) : (e.preventDefault(), o.classList.remove("form-animation-show"), o.classList.remove("form-hotel-search-error"), o.offsetWidth = o.offsetWidth, o.classList.add("form-hotel-search-error"));
  });
})();
/******/ })()
;
//# sourceMappingURL=bundle.js.map