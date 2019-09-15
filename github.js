class GitHub {
  constructor() {
    this.client_id = '3ba16aed1e6f7a24ca6b';
    this.client_secret = 'de04ec28d3ee0dd66607aabaaf5d14500a7e156b';
    // Limit the number of repos we show
    this.repos_count = 6;
    // Show latest repos 1st
    this.repos_sort = 'created: asc';
  }

  // Get User; profileResponse will get user and repos
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      // ES6: same as saying profile:profile, repos:repos
      profile,
      repos
    };
  }
}
