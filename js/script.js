// Add custom JavaScript here
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll(".nav-link");
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      navbar.classList.add("bg-primary");

      const navlinkList = [...navlinks].map((el) => {
        el.classList.add("navbar-link-secondary");
      });

      // toggle logo
      // logo1.classList.toggle("d-none");
      // logo2.classList.toggle("d-block");
    } else {
      navbar.classList.remove("bg-primary");
      const navlinkList = [...navlinks].map((el) => {
        el.classList.remove("navbar-link-secondary");
      });

      // toggle logo
      // logo2.classList.toggle("d-none");
      // logo1.classList.toggle("d-block");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
