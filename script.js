//your JS code here. If required.
const colorSelect = document.querySelector('#colorSelect');
const removeColorButton = document.querySelector('#removeColorButton');

removeColorButton.addEventListener('click', () => {
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  const colorToRemove = selectedOption.value;

  // Remove the selected color from the dropdown list
  for (let i = 0; i < colorSelect.options.length; i++) {
    const option = colorSelect.options[i];
    if (option.value === colorToRemove) {
      colorSelect.removeChild(option);
      break;
    }
  }
});

