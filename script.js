document.addEventListener("DOMContentLoaded", function () {
  // Theme preference toggle with local persistence.
  var themeToggle = document.getElementById("theme-toggle");
  var storedTheme = localStorage.getItem("theme");
  var preferredTheme =
    storedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  var applyTheme = function (theme) {
    document.body.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.checked = theme === "dark";
  };

  applyTheme(preferredTheme);

  if (themeToggle) {
    themeToggle.addEventListener("change", function () {
      var nextTheme = themeToggle.checked ? "dark" : "light";
      applyTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }

  var typed = new Typed(".changing-text", {
    strings: [
      "Interactive user interfaces",
      "Responsive web experiences",
      "Accessible front-ends",
      "Performant UI systems",
    ],
    typeSpeed: 70,
    backDelay: 700,
    loop: true,
    loopCount: Infinity,
  });

  // Add nav border on scroll for a subtle sticky state.
  var nav = document.querySelector("nav");
  var handleScroll = function () {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Fade in sections as they enter the viewport.
  var sections = document.querySelectorAll(
    "main section, .get-in-touch, .google-form",
  );
  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
  );
  sections.forEach(function (section) {
    observer.observe(section);
  });

  // Optional custom cursor dot for desktop pointers only.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);

    var rafId = null;
    var mouseX = 0;
    var mouseY = 0;

    var updateDot = function () {
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
      rafId = null;
    };

    window.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.opacity = "1";
      if (!rafId) rafId = requestAnimationFrame(updateDot);
    });

    window.addEventListener("mouseleave", function () {
      dot.style.opacity = "0";
    });
  }
});
