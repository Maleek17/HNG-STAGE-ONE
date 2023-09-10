const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDay = daysOfWeek[currentDayIndex];

dayOfTheWeekElement.textContent = currentDay;

const currentUTCTime = new Date().toUTCString();
utcTimeElement.textContent = currentUTCTime;
