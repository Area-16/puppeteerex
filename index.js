const prompt = require('prompt')
const pupp = require('puppeteer')

console.log('Digite os links com http:// ou https://  ')

//
// Começa the prompt
//
prompt.start()

prompt.get(['first', 'second'], (err, result) => {
  if (err) {
    // console.error(err)
    process.exit(1)
  }

  console.log('Links recebidos:')
  console.log('  primeiro link: ' + result.first)
  console.log('  segundo link: ' + result.second)

  const devices = require('puppeteer/DeviceDescriptors')

  // Take screenshot full page emulatig an iPad
  ;(async () => {
    const browser = await pupp.launch()
    const page = await browser.newPage()
    await page.emulate(devices['iPad'])
    await page.goto(result.first.toString())
    await page.screenshot({ path: `./assets/fullpage${new Date()}.png`, fullPage: true })
    await browser.close()
  })()

  // Take screenshot
  ;(async () => {
    const browser = await pupp.launch()
    const page = await browser.newPage()
    await page.goto(result.second.toString())
    await page.screenshot({ path: `./assets/simplescreenshot${new Date()}.png` })

    await browser.close()
  })()
})
