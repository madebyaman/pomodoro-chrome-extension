const nameInput = document.getElementById('name-input');
const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', () => {
  const name = nameInput.value;
  chrome.storage.sync.set(
    {
      name,
    },
    () => {
      console.log(`Name set to ${name}`);
    }
  );
});
