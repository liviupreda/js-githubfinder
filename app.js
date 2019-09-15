// Instantiate GitHub
const github = new GitHub();

// Search input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert if user is not found (will implement in ui.js)
      } else {
        // Show profile (will implement in ui.js)
      }
    });
  } else {
    // Clear profile form (ui.js)
  }
});
