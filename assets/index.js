const {appId, redirectUri, scope } = {
    appId: '2589814177943223',
    redirectUri: 'https://senintablon.herokuapp.com/auth',
    scope: 'user_profile,user_media'
}

fetch(`https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`)
.then(res => res.json())
.then(data => console.log(data))