async function getHtml() {
    const geolocationExample = document.querySelector('#geolocation-example');
    const res = await fetch('https://raw.githubusercontent.com/Stromwerk/openstreetmap-geolocation/master/index.html');
    res.text().then(html => geolocationExample.srcdoc = html);
}
getHtml();