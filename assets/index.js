const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

let formData = new FormData();
formData.append('client_id', '2941726619215643');
formData.append('client_secret', '9056d311cdf30670af3689a5261ab282');
formData.append('grant_type', 'authorization_code');
formData.append('redirect_uri', 'https://senintablon.herokuapp.com/auth');
formData.append('code', code);

const getImages = (token) => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,thumbnail_url,media_url,media_type&access_token=${token}`, {
    method: 'get',
  }).then(res => res.json())
    .then(({ data }) => {
        console.log(data, data.length)
        for (let index = 0; index < data.length; index++) {
            const media = data[index];

            console.log(media)
            
            if (media.media_type === "IMAGE") {
                const $img = document.createElement('img')
                $img.src = media.media_url
                $img.title = media.caption || ''

                console.log($img)
                document.getElementById('images').appendChild($img)
            }
        }
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