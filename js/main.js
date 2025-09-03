//عام

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
///
//to top
let toTop = document.querySelector(".toTop");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    toTop.style.display = "flex";
  }
});
toTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// home
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelector(".fa.fa-bars");
  const links = document.querySelector(".links");

  function toggleLinks() {
    if (window.innerWidth <= 480) {
      if (links.style.display === "inline-block") {
        links.style.display = "none";
      } else {
        links.style.display = "inline-block";
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
// let homeheader = document.getElementById("homeheader");
// function Headercolor() {
//   if (window.scrollY > 0) {
//     homeheader.style.backgroundColor = "rgb(0, 0, 0)";
//   } else {
//     homeheader.style.backgroundColor = "";
//   }
// }
// window.addEventListener("scroll", Headercolor);

///
// typing effect
let nameElement = document.getElementById("name");
let texts = ["I'm Asmaa", "I'm Programmer"];
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
// portofolio

let work1 = document.getElementById("work1");
let work2 = document.getElementById("work2");
let work3 = document.getElementById("work3");
let work4 = document.getElementById("work4");
let work5 = document.getElementById("work5");
let work6 = document.getElementById("work6");
let desc1 = document.getElementById("desc1").textContent;
let desc2 = document.getElementById("desc2").textContent;
let desc3 = document.getElementById("desc3").textContent;
let desc4 = document.getElementById("desc4").textContent;
let desc5 = document.getElementById("desc5").textContent;
let desc6 = document.getElementById("desc6").textContent;
let title1 = document.getElementById("title1").textContent;
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");
let link6 = document.getElementById("link6");

work1.addEventListener("click", function () {
  showModal("work1", title1, desc1, link1);
});
work2.addEventListener("click", function () {
  showModal("work2", "project2", desc2, link2);
});
work3.addEventListener("click", function () {
  showModal("work3", "project3", desc3, link3);
});
work4.addEventListener("click", function () {
  showModal("work4", "project4", desc4, link4);
});
work5.addEventListener("click", function () {
  showModal("work5", "project5", desc5, link5);
});
work6.addEventListener("click", function () {
  showModal("work6", "project6", desc6, link6);
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
  // homeheader.style.display = "none";
}
let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function () {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
  // homeheader.style.display = "flex";
});

// skills
let skillsSection = document.getElementById("skills");
let spans = document.querySelectorAll(".progress span");
window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 400) {
    spans.forEach((span) => {
      let width = span.dataset.width;
      span.style.width = width;
    });
  }
};
