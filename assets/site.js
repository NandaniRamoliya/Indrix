(function () {
  var root = document.documentElement;

  // Light / dark mode: follows the device until the visitor picks one.
  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var cur = root.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("indrix.theme", next); } catch (e) {}
    });
  }

  // Mobile menu.
  var menuBtn = document.getElementById("menuBtn");
  var links = document.getElementById("navLinks");
  if (menuBtn && links) {
    var setMenu = function (open) {
      links.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    menuBtn.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }

  // Reveal sections as they scroll into view.
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Contact form: no server needed. It writes the message for the visitor
  // and opens WhatsApp (or their email app) so they can send it themselves.
  var form = document.getElementById("contactForm");
  if (form) {
    var WHATSAPP = form.getAttribute("data-whatsapp");
    var EMAIL = form.getAttribute("data-email");
    var message = function () {
      var f = form.elements;
      var lines = ["Hi Indrix! I'd like to talk about a project.", "", "Name: " + f.name.value.trim()];
      if (f.business.value.trim()) lines.push("Business: " + f.business.value.trim());
      lines.push("I need: " + f.need.value);
      lines.push("", f.details.value.trim());
      return lines.join("\n");
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message()), "_blank", "noopener");
    });
    document.getElementById("emailBtn").addEventListener("click", function () {
      if (!form.reportValidity()) return;
      location.href = "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent("Project enquiry from " + form.elements.name.value.trim()) +
        "&body=" + encodeURIComponent(message());
    });
  }
})();
