const timeElement = document.getElementById('time');
const nameElement = document.getElementById('name');
const timerElement = document.getElementById('timer');

function updateTimeElement() {
  chrome.storage.local.get(['timer'], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = time;
  });

  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The time is ${currentTime}`;
}

updateTimeElement();
setInterval(() => {
  updateTimeElement();
}, 1000);

chrome.storage.sync.get(['name'], (res) => {
  if (res.name) nameElement.textContent = `Your name is: ${res.name}`;
});
