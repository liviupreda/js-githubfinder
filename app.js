// Instantiate GitHub
const github = new GitHub();

// Init UI
const ui = new UI();

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
        // Show alert if user is not found (ui.js)
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile (ui.js)
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile if form is empty (ui.js)
    ui.clearProfile();
  }
});
