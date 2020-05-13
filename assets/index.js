const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

const requestBody = {
    'client_id': '2941726619215643',
    'client_secret': "9056d311cdf30670af3689a5261ab282",
    'grant_type': 'authorization_code',
    'redirect_uri': 'https://senintablon.herokuapp.com',
    code
}


let formData = new FormData();
formData.append('client_id', '2941726619215643');
formData.append('client_secret', '9056d311cdf30670af3689a5261ab282');
formData.append('grant_type', 'authorization_code');
formData.append('redirect_uri', 'https://senintablon.herokuapp.com/auth');
formData.append('code', code);

const getImages = (token='IGQVJXZADJPZATY1QjdVM09sOWJQazRaYmg5ZAFJHRVVvN2pFYVZASVnZAZAMmM5dDhWWU1PdEhtOFNNOG55VGdqbUYzdFVtRHNpdHZAvTENMOGhyQXdDUzZApdVpMWmtnUGtObDg2M2FoTXF0UVFuTFdRLVJTOAZDZD') => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,thumbnail_url,media_url,media_type&access_token=${token}`, {
    method: 'get',
  }).then(res => res.json())
    .then(data => {
        document.getElementById('images').innerHTML = JSON.stringify(data);
        console.log(data)
    })
}

fetch('https://api.instagram.com/oauth/access_token', {
    method: 'post',
    body: formData
  }).then(res => res.json())
    .then(data => {
        document.getElementById('code').innerHTML = JSON.stringify(data);
        console.log(data)
        getImages(data['access_token'])
    })