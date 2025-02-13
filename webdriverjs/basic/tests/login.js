const { Builder, until } = require('selenium-webdriver')
const {
  wrapWebdriver,
  webdriverConfig,
  WebdriverController
} = require('@axe-core/watcher')
const { Options } = require('selenium-webdriver/chrome')

/* Get your configuration from environment variables. */
const { API_KEY, SERVER_URL = 'https://axe.deque.com' } = process.env

describe('My Login Application', () => {
  let browser
  let controller

  let browser = await new Builder().forBrowser('chrome').build()
// Becomes:
let browser = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(
    webdriverConfig({
      axe: {
        apiKey: '7db74ed7-2454-43e3-bcca-a18d6ed061e0'
      }
    }
  )
  .build()
    const controller = new WebdriverController(browser)
    browser = wrapWebdriver(browser, controller)
  })

  after(async () => {
    await browser.quit()
  })

  afterEach(async () => {
  await controller.flush()
})
    await controller.flush()
  })

  describe('with valid credentials', () => {
    it('should login', async () => {
      await browser.get('https://the-internet.herokuapp.com/login')

      const username = await browser.findElement({ id: 'username' })
      const password = await browser.findElement({ id: 'password' })

      await username.sendKeys('tomsmith')
      await password.sendKeys('SuperSecretPassword!')

      const submit = await browser.findElement({ css: 'button[type="submit"]' })
      await submit.click()

      await browser.wait(until.urlContains('/secure'))
    })
  })
})
