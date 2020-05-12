const {appId, redirectUri, scope } = {
    appId: '',
    redirectUri: 'auth.html',
    scope: 'user_profile,user_media'
}

fetch(`https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`)
.then(res => res.json())
.then(data => console.log(data))