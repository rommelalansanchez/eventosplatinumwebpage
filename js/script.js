// Add custom JavaScript here
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll(".nav-link");

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarToglerIcon = document.querySelector(".menu-toggler-icon");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      navbar.classList.add("bg-primary");

      const navlinkList = [...navlinks].map((el) => {
        el.classList.add("navbar-link-secondary");
      });
      navbarToggler.classList.remove("navbar-toggler-primary");
      navbarToglerIcon.classList.remove("text-primary");
    } else {
      navbar.classList.remove("bg-primary");
      const navlinkList = [...navlinks].map((el) => {
        el.classList.remove("navbar-link-secondary");
      });
      navbarToggler.classList.add("navbar-toggler-primary");
      navbarToglerIcon.classList.add("text-primary");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
