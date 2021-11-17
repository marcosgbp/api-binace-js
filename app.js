let endpoint = "https://fapi.binance.com/fapi/v1/ticker/price";
setInterval(() => {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => mostrarDatos(data))
        .catch(error => console.log(error))
}, 5000);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
//Función para mostrar dato recibido
const mostrarDatos = (data) => {
    let body = '';
    let dato = data.reverse();
    for (let i = 0; i < dato.length; i++) {
        body += `<tr><td>${dato[i].symbol}</td>  <td>${formatter.format(dato[i].price)}</td></tr>`
    }
    console.log(body)
    document.querySelector("#datos").innerHTML = body
}