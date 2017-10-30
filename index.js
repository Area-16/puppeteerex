const pupp = require('puppeteer')

// Take screenshot full page emulatig an iPad
const devices = require('puppeteer/DeviceDescriptors')

;(async () => {
  const browser = await pupp.launch()
  const page = await browser.newPage()
  await page.emulate(devices['iPad'])
  await page.goto('https://dougtq.github.io/')
  await page.screenshot({ path: `./assets/fullpage${new Date()}.png`, fullPage: true })
  await browser.close()
})()

// Take screenshot
;(async () => {
  const browser = await pupp.launch()
  const page = await browser.newPage()
  await page.goto('https://dougtq.github.io/')
  await page.screenshot({ path: `./assets/simplescreenshot${new Date()}.png` })

  await browser.close()
})()
