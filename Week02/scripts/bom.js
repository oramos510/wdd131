// Variables to hold references to the input, button, and unordered list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chaptersList');

// Event listener for the button click
button.addEventListener('click', () => {
  // Check if the input is not empty
  if (input.value.trim() !== '') {
    // Create a new li element
    const li = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');

    // Populate li textContent with input value and delete button
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append the delete button to the li
    li.append(deleteButton);

    // Append the li to the list
    list.append(li);

    // Clear the input field for the next entry
    input.value = '';

    // Add an event listener to the delete button to remove the chapter
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });
  } else {
    alert('Please enter a chapter!');
  }
});
