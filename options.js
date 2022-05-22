const nameInput = document.getElementById('name-input');
const timeInput = document.getElementById('time-input');
const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', () => {
  const name = nameInput.value;
  chrome.storage.sync.set(
    {
      name,
      notificationTime: timeInput.value,
    },
    () => {
      console.log(`Name set to ${name}`);
    }
  );
});

chrome.storage.sync.get(['name', 'notificationTime'], (result) => {
  console.log(result);
  if (result.name) {
    nameInput.value = result.name;
  }
  if (result.notificationTime) {
    timeInput.value = result.notificationTime;
  }
});
