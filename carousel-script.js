const carousel = document.querySelector(".carousel");
// firstImg = carousel.querySelectorAll("img")[0];
// arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

// let firstImgWidth = firstImg.clientWidth + 14;

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//   });
// });

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.scrollLeft = e.pageX;
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = (e) => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
