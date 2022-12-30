const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.ambito.com/contenidos/dolar.html')

    const result = await page.evaluate(() => {

        let dolarTuristaI = document.querySelector('[data-indice="/dolarturista"]').querySelector('.value').innerText
        let dolarBlueCompraI = document.querySelector('[data-indice="/dolar/informal"]').querySelector('.data-compra').innerText
        let dolarBlueVentaI = document.querySelector('[data-indice="/dolar/informal"]').querySelector('.data-venta').innerText
        
            

        let final = {
            dolarTurista: dolarTuristaI,
            dolarBlueCompra: dolarBlueCompraI,
            dolarBlueVenta: dolarBlueVentaI
        }

        return final

    })
    console.log(result)

    await browser.close()

})()