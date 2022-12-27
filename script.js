const cotizaciones = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
let test = []

async function fetchDollar() {
    const response = await fetch(cotizaciones);
    const values = await response.json();
    return values;
}

fetchDollar().then(values => {
    const mayorista = document.getElementById('mayorista');
    const blue = document.getElementById('blue');
    const turista = document.getElementById('turista');
    const ccl = document.getElementById('ccl');
    const bolsa = document.getElementById('bolsa');

    mayorista.appendChild(document.createElement('p')).innerHTML = `&nbsp; Compra: ${values[0].casa.compra}. Venta: ${values[0].casa.venta}.`;
    blue.appendChild(document.createElement('p')).innerHTML = `&nbsp; Compra: ${values[1].casa.compra}. Venta: ${values[1].casa.venta}.`;
    turista.appendChild(document.createElement('p')).innerHTML = `&nbsp; Venta: ${values[6].casa.venta}.`;
    ccl.appendChild(document.createElement('p')).innerHTML = `&nbsp; Compra: ${values[3].casa.compra}. Venta: ${values[3].casa.venta}.`;
    bolsa.appendChild(document.createElement('p')).innerHTML = `&nbsp; Compra: ${values[4].casa.compra}. Venta: ${values[4].casa.venta}.`;
});