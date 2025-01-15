const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  navLinks.forEach((link) => {
    const header = document.querySelector("header");
    header.classList.remove("active");
    setTimeout(() => {
      header.classList.add("active");
    }, 11);
    link.classList.remove("active");
  });
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 11);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");
    setTimeout(() => {
      sections[0].classList.add("active");
    }, 11);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".projects-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".projects-box .navigation .arrow-left"
);

let index = 0;

const activeProjects = () => {
  const imgSlide = document.querySelector(".projects-carousel .img-slide");
  const projectDetails = document.querySelectorAll(".projects-detail");
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
  projectDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  projectDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 1) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 2;
    arrowRight.classList.add("disabled");
  }
  activeProjects();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activeProjects();
});
