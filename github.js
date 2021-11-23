class GitHub {
    constructor(){
    this.client_id = 'ca10ffee80967e8b2c92';
    this.client_secret='6e4fc240592fcd464fa8f86f6f8d287e0e0733cb';
    this.repos_count=5;
    this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }

    }
}