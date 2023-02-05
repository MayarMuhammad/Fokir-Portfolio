(() => {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      smartBackspace: false,
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
    });
  }

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  function scrollValue() {
    var navbar = document.getElementById("navbar");
    var scroll = window.scrollY;
    if (scroll < 200) {
      navbar.classList.remove("BgColour");
    } else {
      navbar.classList.add("BgColour");
    }
  }

  window.addEventListener("scroll", scrollValue);

  $(window).on("hashchange", function (e) {
    history.replaceState("", document.title, e.originalEvent.oldURL);
  });

  new PureCounter();
})();
