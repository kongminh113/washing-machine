const express = require('express');
const app = express();
const fetch = require("node-fetch");
const puppeteer = require('puppeteer')

var washing_machine_1_status = "Loading"
var washing_machine_2_status = "Loading"
var washing_machine_3_status = "Loading"
var washing_machine_4_status = "Loading"
var washing_machine_5_status = "Loading"
var washing_machine_6_status = "Loading"
var washing_machine_7_status = "Loading"
var washing_machine_8_status = "Loading"
var washing_machine_9_status = "Loading"
var washing_machine_10_status = "Loading"
var time1_status = 0
var time2_status = 0
var time3_status = 0
var time4_status = 0
var time5_status = 0
var time6_status = 0
var time7_status = 0
var time8_status = 0
var time9_status = 0
var time10_status = 0

setInterval(() => (update_state()),60000)


try {
    (async () => {
      const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto('https://www.coin-laundry.co.jp/userp/shop_detail/11000758', { waitUntil: 'networkidle2' })
        
    function update_state(){
    let data =  await page.evaluate(() => {
        let data1 = document.querySelector('#tbl-body-operational-status tr:nth-child(1) td:nth-child(3)').textContent
        let data2 = document.querySelector('#tbl-body-operational-status tr:nth-child(2) td:nth-child(3)').textContent
        let data3 = document.querySelector('#tbl-body-operational-status tr:nth-child(3) td:nth-child(3)').textContent
        let data4 = document.querySelector('#tbl-body-operational-status tr:nth-child(4) td:nth-child(3)').textContent
        let data5 = document.querySelector('#tbl-body-operational-status tr:nth-child(5) td:nth-child(3)').textContent
        let data6 = document.querySelector('#tbl-body-operational-status tr:nth-child(6) td:nth-child(3)').textContent
        let data7 = document.querySelector('#tbl-body-operational-status tr:nth-child(7) td:nth-child(3)').textContent
        let data8 = document.querySelector('#tbl-body-operational-status tr:nth-child(8) td:nth-child(3)').textContent
        let data9 = document.querySelector('#tbl-body-operational-status tr:nth-child(9) td:nth-child(3)').textContent
        let data10 = document.querySelector('#tbl-body-operational-status tr:nth-child(10) td:nth-child(3)').textContent
        
        let time1 = document.querySelector('#tbl-body-operational-status tr:nth-child(1) td:nth-child(4)').textContent
        let time2 = document.querySelector('#tbl-body-operational-status tr:nth-child(2) td:nth-child(4)').textContent
        let time3 = document.querySelector('#tbl-body-operational-status tr:nth-child(3) td:nth-child(4)').textContent
        let time4 = document.querySelector('#tbl-body-operational-status tr:nth-child(4) td:nth-child(4)').textContent
        let time5 = document.querySelector('#tbl-body-operational-status tr:nth-child(5) td:nth-child(4)').textContent
        let time6 = document.querySelector('#tbl-body-operational-status tr:nth-child(6) td:nth-child(4)').textContent
        let time7 = document.querySelector('#tbl-body-operational-status tr:nth-child(7) td:nth-child(4)').textContent
        let time8 = document.querySelector('#tbl-body-operational-status tr:nth-child(8) td:nth-child(4)').textContent
        let time9 = document.querySelector('#tbl-body-operational-status tr:nth-child(9) td:nth-child(4)').textContent
        let time10 = document.querySelector('#tbl-body-operational-status tr:nth-child(10) td:nth-child(4)').textContent
        return {data1 , data2, data3, data4, data5, data6, data7, data8, data9, data10, time1, time2, time3, time4, time5, time6, time7, time8, time9, time10}
    })
    }
        washing_machine_1_status = data.data1
        washing_machine_2_status = data.data2
        washing_machine_3_status = data.data3
        washing_machine_4_status = data.data4
        washing_machine_5_status = data.data5
        washing_machine_6_status = data.data6
        washing_machine_7_status = data.data7
        washing_machine_8_status = data.data8
        washing_machine_9_status = data.data9
        washing_machine_10_status = data.data10
        
        time1_status = data.time1
        time2_status = data.time2
        time3_status = data.time3
        time4_status = data.time4
        time5_status = data.time5
        time6_status = data.time6
        time7_status = data.time7
        time8_status = data.time8
        time9_status = data.time9
        time10_status = data.time10
        
        //await browser.close()
      
    })()
  } catch (err) {
    console.error(err)
  }


  app.get('/', function (req, res) {
    let json = {"result":
                { "result1":washing_machine_1_status,"result2":washing_machine_2_status,"result3":washing_machine_3_status,"result4":washing_machine_4_status,"result5":washing_machine_5_status,"result6":washing_machine_6_status,"result7":washing_machine_7_status,"result8":washing_machine_8_status,"result9":washing_machine_9_status,"result10":washing_machine_10_status},
                "time":
                { "time1":time1_status, "time2":time2_status, "time3":time3_status, "time4":time4_status, "time5":time5_status, "time6":time6_status, "time7":time7_status, "time8":time8_status, "time9":time9_status, "time10":time10_status }}
    return res.send(JSON.stringify(json));
   });

app.listen(process.env.PORT || 5000);


