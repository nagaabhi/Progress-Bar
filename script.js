const progressBar = document.querySelector(".progress-bar");
const percentageText = document.querySelector(".percentage-text");

let widthVal = 0;
let percentagetTexVal = 0;

setInterval(() => {
  percentagetTexVal += 1;
  widthVal += 1;
  percentageText.innerHTML = `${percentagetTexVal}%`;
  progressBar.style.width = `${widthVal}%`;
  if (percentagetTexVal === 100) {
    percentagetTexVal = 0;
    widthVal = 0;
  }
}, 100);
