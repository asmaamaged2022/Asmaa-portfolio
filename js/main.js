//General

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
////////////////////////////
//to top
let toTop = document.querySelector(".toTop");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});
toTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
////////////////////////////////////////////////////
//home
// home icon responsive
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelector(".fa.fa-bars");
  const links = document.querySelector(".links");
  if (window.innerWidth <= 480) {
    links.style.display = "none";
  }
  function toggleLinks() {
    if (window.innerWidth <= 480) {
      if (links.style.display === "flex") {
        links.style.display = "none";
      } else {
        links.style.display = "flex";
      }
    }
  }

  if (bars && links) {
    bars.addEventListener("click", toggleLinks);

    window.addEventListener("resize", function () {
      if (window.innerWidth > 480) {
        links.style.display = "";
      }
    });
  }
});
///nav bar
let homeheader = document.getElementById("homeheader");
function Headercolor() {
  if (window.scrollY > 0) {
    homeheader.style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    homeheader.style.backgroundColor = "";
  }
}
window.addEventListener("scroll", Headercolor);

///
// typing effect
let nameElement = document.getElementById("name");
let texts = ["I'm A Software Engineer", "I'm A Web developer"];
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  let currentText = texts[textIndex];

  if (!deleting) {
    nameElement.textContent = currentText.slice(0, charIndex++);
    if (charIndex > currentText.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    nameElement.textContent = currentText.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
    }
  }
  setTimeout(typeEffect, deleting ? 100 : 150);
}

typeEffect();
////////////////////////////////////////////////////
// portofolio

let work1 = document.getElementById("work1");
let work2 = document.getElementById("work2");
let work3 = document.getElementById("work3");
let desc1 = document.getElementById("desc1").textContent;
let desc2 = document.getElementById("desc2").textContent;
let desc3 = document.getElementById("desc3").textContent;
let title1 = document.getElementById("title1").textContent;
let title2 = document.getElementById("title2").textContent;
let title3 = document.getElementById("title3").textContent;
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
work1.addEventListener("click", function () {
  showModal("work1", title1, desc1, link1);
});
work2.addEventListener("click", function () {
  showModal("work2", title2, desc2, link2);
});
work3.addEventListener("click", function () {
  showModal("work3", title3, desc3, link3);
});
function showModal(imageId, title, desc, link) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("MyImg");
  let modalTitle = document.getElementById("modalTitle");
  let modalDescription = document.getElementById("description");
  let modalLink = document.getElementById("githubLink");
  modalTitle.textContent = title;
  modalDescription.textContent = desc;
  modalLink.href = link.href;
  let img = document.getElementById(imageId);
  modalImg.src = img.querySelector("img").src;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  homeheader.style.display = "none";
  toTop.style.display = "none";
}
let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function () {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
  homeheader.style.display = "flex";
  toTop.style.display = "flex";
});
////////////////////////////////////////////////////
////skills
let skillsSection = document.getElementById("skills");
let spans = document.querySelectorAll(".progress span");

window.addEventListener("scroll", function () {
  let sectionTop = skillsSection.offsetTop;
  let sectionHeight = skillsSection.offsetHeight;
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;

  if (
    scrollY + windowHeight >= sectionTop+200 &&
    scrollY <= sectionTop + sectionHeight
  ) {
    spans.forEach((span) => {
      let width = span.dataset.width;
      span.style.width = width;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = "0";
    });
  }
});
////////////////////////////////////////////////////
