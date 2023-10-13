const previous_slide = document.getElementById("previousSlide");
const next_slide = document.getElementById("nextSlide");
const flag = document.querySelector(".presentation .chapter:first-child")
var init = 0;

next_slide.addEventListener("click", (e) => {
  ++init;
  flag.style.transform = "translateX(" + (-100 * init) + "vw)";
})

previous_slide.addEventListener("click", (e) => {
  if (init != 0) --init;
  flag.style.transform = "translateX(" + (-100 * init) + "vw)";
})