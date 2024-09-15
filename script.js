function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed(".typing-text", {
  strings: ["frontend development", "backend development", "web designing", "java development", "python development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

document.addEventListener('DOMContentLoaded', function () {
  const desktopLogo = document.querySelector('#desktop-nav .logo');
  const mobileLogo = document.querySelector('#hamburger-nav .logo');

  // Function to scroll to the top
  function scrollToTop(isMobile) {
    window.scrollTo({
      top: isMobile ? document.querySelector('#profile').offsetTop - 120 : 0, // Adjust 80px for mobile navbar height
      behavior: 'smooth'
    });
  }

  // Event listener for desktop logo
  if (desktopLogo) {
    desktopLogo.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToTop(false);
    });
  }

  // Event listener for mobile logo
  if (mobileLogo) {
    mobileLogo.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToTop(true);
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const options = {
    root: null, // viewport
    threshold: 0.6, // 60% of the section must be visible for it to be considered in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Get the nav link corresponding to the currently visible section
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        // Add 'active' class to that link
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, options);

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");
const photos = document.querySelectorAll(".myphoto");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });

  photos.forEach((photo) => {
    photo.src = photo.getAttribute("src-dark");
  });

}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });

  photos.forEach((photo) => {
    photo.src = photo.getAttribute("src-light");
  });
}
