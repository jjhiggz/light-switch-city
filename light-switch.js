const $knobUp = document.querySelector(".knob-up");
const $knobDown = document.querySelector(".knob-down");
const $lightSwitch = document.querySelector(".light-switch");
const $rightContainer = document.querySelector(".right");

$lightSwitch.addEventListener("click", () => {
  $knobDown.classList.toggle("hide");
  $knobUp.classList.toggle("hide");
  $rightContainer.classList.toggle("dark");
});
