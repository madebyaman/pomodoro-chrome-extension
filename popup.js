const timeElement = document.getElementById('time');
const nameElement = document.getElementById('name');
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: 'TIME',
  },
  () => {
    console.log('Set badge');
  }
);

chrome.storage.sync.get(['name'], (res) => {
  if (res.name) nameElement.textContent = `Your name is: ${res.name}`;
});
