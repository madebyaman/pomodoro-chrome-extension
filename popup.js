const timeElement = document.getElementById('time');
const nameElement = document.getElementById('name');
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is ${currentTime}`;

chrome.storage.sync.get(['name'], (res) => {
  if (res.name) nameElement.textContent = `Your name is: ${res.name}`;
});
