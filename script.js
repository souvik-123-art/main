let menuBtn = document.getElementById("nav-menu-btn");
let navBar = document.getElementById("navbar");
let overlay = document.getElementById("overlay");
const openMenu = () => {
  let navBar = document.getElementById("navbar");
  navBar.classList.add("translate-x-0");
  navBar.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
};
const closeMenu = () => {
  let navBar = document.getElementById("navbar");
  navBar.classList.remove("translate-x-0");
  navBar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

menuBtn.addEventListener("click", openMenu);

let cross = document.getElementById("cross");
cross.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// for slider
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000, // 3 seconds delay
    disableOnInteraction: false, // autoplay won't stop after user interacts
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    grabCursor: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menuLink = document.querySelectorAll(".nav-list a");
menuLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// form validation
let nameInp = document.querySelector(".name input");
let emailInp = document.querySelector(".email input");
let msgInp = document.querySelector(".message textarea");
let submit = document.querySelector("#form");

submit.addEventListener("submit", (e) => {
  if (validateForm() == true) {
    alert("succesfully submitted. click ok to refresh the page. Thank You");
    submit.submit();
  } else {
    e.preventDefault();
  }
});

const errormsg = (element, message) => {
  let formControl = element.parentElement;
  let errorDis = formControl.querySelector(".error");
  errorDis.innerText = message;

  element.style.outline = "1px solid #a6004b";
};
const success = (element) => {
  let formControl = element.parentElement;
  let errorDis = formControl.querySelector(".error");
  errorDis.innerText = "";

  element.style.outline = "1px solid greenyellow";
};

const validateForm = () => {
  let nameVal = nameInp.value;
  let emailVal = emailInp.value;
  let msgVal = msgInp.value;
  let isTrue = true;
  if (nameVal == "") {
    errormsg(nameInp, "please enter your full name");
    isTrue = false;
  } else {
    success(nameInp);
  }

  if (emailVal == "") {
    errormsg(emailInp, "please enter your email Address");
    isTrue = false;
  } else if (!emailVal.includes("@gmail.com")) {
    errormsg(emailInp, "please enter valid email");
    isTrue = false;
  } else {
    success(emailInp);
  }

  if (msgVal == "") {
    errormsg(msgInp, "please write your message");
    isTrue = false;
  } else {
    success(msgInp);
  }

  return isTrue;
};

let tl = gsap.timeline();

// tl.from("header #logo", {
//   y: -30,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.3,
// });
// if (window.innerWidth > 768) {
//   tl.from("header #navbar ul li", {
//     y: -30,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.3,
//     stagger: 0.2,
//   });
//   tl.from("main section #hero-section #hero-img", {
//     x: 30,
//     opacity: 0,
//     duration: 0.8,
//   });
//   tl.from("main section #hero-section #hero-cont", {
//     x: -30,
//     opacity: 0,
//     duration: 0.8,
//   });
// }

if (window.innerWidth > 768) {
  tl.from(
  "header #logo",
  {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
  },
  "start"
);
  tl.from(
    "header #navbar ul li",
    {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    },
    "start+=0.2"
  );

  tl.from(
    "main section #hero-section #hero-img",
    {
      x: 30,
      opacity: 0,
      duration: 0.8,
    },
    "start+=0.4"
  );

  tl.from(
    "main section #hero-section #hero-cont",
    {
      x: -30,
      opacity: 0,
      duration: 0.8,
    },
    "start+=0.4"
  );
} else {
  tl.from(
  "header #logo",
  {
    x: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
  },
  "start"
);
  tl.from(
    "main section #hero-section #hero-img",
    {
      y: -30,
      opacity: 0,
      duration: 0.8,
    },
    "start+=0.4"
  );

  tl.from(
    "main section #hero-section #hero-cont",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "start+=0.4"
  );
}

const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "main section #about-sec #about-cont",
    start: "top 80%",
    scroller: "body",
    toggleActions: "play none none none",
  },
});
if (window.innerWidth > 768) {
  aboutTimeline
    .from("main section #about-sec #about-cont #about-img", {
      x: -30,
      opacity: 0,
      duration: 0.8,
    })
    .from(
      "main section #about-sec #about-cont #about-text",
      {
        x: 30,
        opacity: 0,
        duration: 0.8,
      },
      "<"
    )
    .from(
      "main section #about-sec #about-cont #about-text #social div",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.4,
      },
      "<"
    );
} else {
  aboutTimeline
    .from("main section #about-sec #about-cont #about-img", {
      y: -30,
      opacity: 0,
      duration: 0.8,
    })
    .from(
      "main section #about-sec #about-cont #about-text",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "<"
    )
    .from(
      "main section #about-sec #about-cont #about-text #social div",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.4,
      },
      "<"
    );
}
