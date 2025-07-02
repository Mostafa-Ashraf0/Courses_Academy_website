let i = 0;
let j = 0;

const text =
  "أكاديمية السندس لتعليم القرآن الكريم هي منصة متخصصة في تحفيظ القرآن وتدريس التجويد للكبار والأطفال بأسلوب مبسط وتفاعلي. تقدم الأكاديمية برامج تعليمية أونلاين بإشراف نخبة من المحفظين والمحفظات المؤهلين. نهدف إلى غرس حب القرآن في النفوس وتيسير حفظه وتعلمه لجميع الفئات العمرية.";

function typewriter() {
  if (i < text.length) {
    document.querySelector(".paragraph").innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, 40);
  }
}

function rotate() {
  document.querySelector(".line").style.setProperty("--angle", `${j}deg`);
  j++;
  requestAnimationFrame(rotate);
  //setTimeout(rotate, 1);
}

window.addEventListener("load", () => {
  typewriter();
  rotate();
});

z = 0;
animated = false;

function popup() {
  let content = document.querySelectorAll(".spn");
  let component = document.querySelectorAll(".first-component");
  if (z < 200) {
    component.forEach((element) => {
      element.style.setProperty("width", `${z}px`);
      element.style.setProperty("height", `${z}px`);
    });
    z++;
    setTimeout(popup, 100);
  } else {
    content.forEach((ele) => {
      ele.style.setProperty("display", "block");
    });
  }
}

//function to indecate the element when reach it
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

//when scroll and reach the elements start popup
window.addEventListener("scroll", () => {
  const target = document.querySelector(".system");
  if (isInViewport(target)) {
    popup();
  }
});

//display nav when click icon and hide when click another time
let icon = document.querySelector(".nav-icon");
let nav = document.querySelector("#nav");

function toggle() {
  nav.classList.toggle("active");
  icon.classList.toggle("active");
}

//hide nav when click on any part of the screen except the nav
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !icon.contains(e.target)) {
    nav.classList.remove("active");
    icon.classList.remove("active");
  }
});

//flip card on click except contact button

let course = document.querySelectorAll(".courseitem");
course.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (!e.target.closest(".course-contact")) {
      ele.classList.toggle("active");
    }
  });
});
