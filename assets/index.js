const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

const requestBody = {
    appId: '2941726619215643',
    clientSecret="9056d311cdf30670af3689a5261ab282",
    redirectUri: 'https://senintablon.herokuapp.com',
    code
}

fetch('https://api.instagram.com/oauth/access_token', {
    method: 'post',
    body: JSON.stringify(requestBody)
  }).then(res => res.json())
    .then(data => console.log(data))