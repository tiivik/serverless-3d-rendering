import type { NextApiRequest, NextApiResponse } from 'next'
const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let {
    query: { url }
  } = req

  if (!url) return res.status(400).end(`No url provided`)

  let browser

  if (process.env.NODE_ENV === 'production') {
    browser = await puppeteer.launch({
      args: chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
      ignoreHTTPSErrors: true
    })
  } else {
    browser = await puppeteer.launch()
  }

  const page = await browser.newPage()
  await page.setViewport({ width: 700, height: 700 })

  await page.goto(url)

  await page.waitForFunction('window.status === "ready"')

  const data = await page.screenshot({
    type: 'png'
  })

  await browser.close()
  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')
  // Write the image to the response with the specified Content-Type
  res.end(data)
}
