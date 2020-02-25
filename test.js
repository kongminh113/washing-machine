const express = require('express');
const app = express();
const fetch = require("node-fetch");
const puppeteer = require('puppeteer')

var washing_machine_3_status = "Loading"
try {
    (async () => {
      const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto('https://www.coin-laundry.co.jp/userp/shop_detail/11000758', { waitUntil: 'networkidle2' })
    
    let data =  await page.evaluate(() => {
        let data1 = document.querySelector('#tbl-body-operational-status tr:nth-child(3) td:nth-child(3)').textContent
        let data2 = document.querySelector('#tbl-body-operational-status tr:nth-child(3) td:nth-child(3)').textContent
        let data3 = document.querySelector('#tbl-body-operational-status tr:nth-child(3) td:nth-child(3)').textContent
        return {data1 , data2, data3}
    })
        washing_machine_3_status = data.data1
        await browser.close()
      
    })()
  } catch (err) {
    console.error(err)
  }

  app.get('/', function (req, res) {
    let json = {"result":washing_machine_3_status, "count":42}
    return res.send(json);
   });

app.listen(process.env.PORT || 5000);


