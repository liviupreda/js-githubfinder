class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" 
            class= "btn btn-primary btn-block mb-4"></a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">
            Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">
            Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">
            Followers: ${user.followers}</span>
            <span class="badge badge-info">
            Following: ${user.following}</span>
            <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/ Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    // Repos is an array. Create output var and loop through it
    let output = '';

    repos.forEach(function(repo) {
      output += `
      <div class = "card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">
            Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">
            Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">
            Forks Count: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert if user is not found
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent, to insert text
    const container = document.querySelector('.search-container');
    // Get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    // Timeout after 2 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert message (so it whos up only once)
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile if form is empty
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
