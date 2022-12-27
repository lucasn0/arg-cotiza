const cotizaciones = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

async function fetchDollar() {
    const response = await fetch(cotizaciones);
    const values = await response.json();
    return values;
}

fetchDollar().then(values => {
    const oficialCompra = document.getElementById('soyGay');
    const oficialVenta = document.getElementById
    console.log(values[0].casa.compra);
    oficialCompra.innerHTML = values[0].casa.venta;
    
});