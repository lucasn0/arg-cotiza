const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.ambito.com/contenidos/dolar.html')

    const result = await page.evaluate(() => {

        let dolarTuristaI = document.querySelector('[data-indice="/dolarturista"]').querySelector('.value').innerText
        let dolarBlueCompraI = document.querySelector('[data-indice="/dolar/informal"]').querySelector('.data-compra').innerText
        let dolarBlueVentaI = document.querySelector('[data-indice="/dolar/informal"]').querySelector('.data-venta').innerText
        let dolarCCLI = document.querySelector('[data-indice="/dolarrava/cl"]').querySelector('.data-valor').innerText
        let dolarMEPI = document.querySelector('[data-indice="/dolarrava/mep"]').querySelector('.data-valor').innerText
        let dolarOficialCompraI = document.querySelector('[data-indice="/dolar/oficial"]').querySelector('.data-compra').innerText
        let dolarOficialVentaI = document.querySelector('[data-indice="/dolar/oficial"]').querySelector('.data-venta').innerText
        let dolarMayoristaCompraI = document.querySelector('[data-indice="/dolar/mayorista"]').querySelector('.data-compra').innerText
        let dolarMayoristaVentaI = document.querySelector('[data-indice="/dolar/mayorista"]').querySelector('.data-venta').innerText 
        let dolarBancoNacionCompraI = document.querySelector('[data-indice="/dolarnacion/"').querySelector('.data-compra').innerText
        let dolarBancoNacionVentaI = document.querySelector('[data-indice="/dolarnacion/"').querySelector('.data-venta').innerText

            

        let final = {
            dolarTurista: dolarTuristaI,
            dolarBlueCompra: dolarBlueCompraI,
            dolarBlueVenta: dolarBlueVentaI,
            dolarCCL: dolarCCLI,
            dolarMEP: dolarMEPI,
            dolarOficialCompra: dolarOficialCompraI,
            dolarOficialVenta: dolarOficialVentaI,
            dolarMayoristaCompra: dolarMayoristaCompraI,
            dolarMayoristaVenta: dolarMayoristaVentaI,
            dolarBancoNacionCompra: dolarBancoNacionCompraI,
            dolarBancoNacionVenta: dolarBancoNacionVentaI
        }

        return final

    })
    console.log(result)

    await browser.close()

})()