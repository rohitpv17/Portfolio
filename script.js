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