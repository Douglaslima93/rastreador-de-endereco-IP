const click = document.querySelector('#botao')
const endereco = document.querySelector('#ip-dados')
const localizacao = document.querySelector('#location-dados')
const zone = document.querySelector('#timezone-dados')
const is = document.querySelector('#isp-dados')

function botao() {
    fetch('https://geo.ipify.org/api/v2/country?apiKey=at_FlMCpArgIh42o9wcKv9LbNButTf5g&ipAddress=8.8.8.8')
    .then(function(response){
        return response.json()
    })

    .then(function(ip){
       // console.log(ip)
        endereco.innerHTML = ip.ip
        localizacao.innerHTML = ip.location.country
        zone.innerHTML = ip.location.timezone
        is.innerHTML = ip.isp
    })
}
