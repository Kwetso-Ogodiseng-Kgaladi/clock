// Interval in milliseconds for updating the clock display
const UPDATE_INTERVAL_MS = 1000;

// DOM elements for clock hands
const hourHandElement = document.querySelector('[data-hour-hand]');
const minuteHandElement = document.querySelector('[data-minute-hand]');
const secondHandElement = document.querySelector('[data-second-hand]');

/**
 * Sets the rotation of the clock hands based on the current time.
 */
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHandElement, secondsRatio);
  setRotation(minuteHandElement, minutesRatio);
  setRotation(hourHandElement, hoursRatio);
}

/**
 * Sets the rotation of the specified element.
 *
 * @param {Element | null} element - The element to rotate.
 * @param {number} rotationRatio - The rotation ratio between 0 and 1.
 */
function setRotation(element, rotationRatio) {
  // @ts-ignore
  element.style.setProperty('--rotation', rotationRatio * 360);
}

// Initial clock setup
setClock();

// Update the clock display periodically
setInterval(setClock, UPDATE_INTERVAL_MS);
