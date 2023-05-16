const click = document.querySelector('#botao')
const endereco = document.querySelector('#ip-dados')
const localizacao = document.querySelector('#location-dados')
const zone = document.querySelector('#timezone-dados')
const is = document.querySelector('#isp-dados')


function botao() {
    const ipInput = document.querySelector('#ip-input').value
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_FlMCpArgIh42o9wcKv9LbNButTf5g&ipAddress=${ipInput}`)
    .then(function(response){
        return response.json()
    })
    
    .then(function(ip){
        //console.log(ip)
        endereco.innerHTML = ip.ip
        localizacao.innerHTML = `${ip.location.country}/${ip.location.region}`
        zone.innerHTML = ip.location.timezone
        is.innerHTML = ip.isp

        var map = L.map('map').setView([ip.location.lat,ip.location.lng], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([ip.location.lat,ip.location.lng]).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
            //console.log(map)
    })
 
}


