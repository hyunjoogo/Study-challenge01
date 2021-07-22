'use strict';

const carNameInput = document.querySelector('#car-names-input');
const carNameBtn = document.querySelector('#car-names-submit');
const racingCountInput = document.querySelector('#racing-count-input');
const racingCountBtn = document.querySelector('#racing-count-submit');

const handleCarNames = (event) => {
  event.preventDefault()
  const carNames = carNameInput.value.split(',');
  console.log(carNames);
}
carNameBtn.addEventListener('click', (event) => {
  handleCarNames(event);
});


const handleRacingCount = (event) => {
  event.preventDefault();
  const racingCount = racingCountInput.value;
  console.log(racingCount);
}
racingCountBtn.addEventListener('click', (event) => {
  handleRacingCount(event);
})

const makeNumber = () => {
  const randomNum_0_9 = Math.floor(Math.random() * 10);
  checkCanGo(randomNum_0_9);
}
const checkCanGo = (value) => {
  if (value > 3) {
    return true;
  } else {
    return false;
  }
}

const moveForward = (value) => {
  if (value === true) {
    return "-";
  } else {
    return "";
  }
}

const paintResult = () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = moveForward();
  li.append(span);
  return li;
}

makeNumber();
