const puppeteer = require('puppeteer')

const base = 'https://movie.douban.com/subject/'
const doubanId = '26584183'
const videoBase = 'https://movie.douban.com/trailer/244061/'


const  sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
  })



;(async () => {
  console.log('start visit the target page')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })
  const  page = await browser.newPage()
  await  page.goto(base + doubanId, {
    waitUntil: 'networkidle2'
  })

  await sleep(1000)


  const result = await page.evaluate(() => {
    var $ = window.$
    var it = $('.related-pic-video')//直接拿取封面图

    if(it && it.length > 0) {
      var link = it.attr('href') //跳转地址
      var cover = it.find('img').attr('src')//封面图

      return {
        link,
        cover
      }
    }

    return {}
  })

  let video  //爬视频
  //如果有link就说明有预告片的地址
  if(result.link) {
    await page.goto(result.link, {
      awaitUntil: 'networkidle2'
    })
    await sleep(2000)

    //传入回调函数通过video,然后在页面执行
    video = await page.evaluate(() => {
      var $ = window.$ //拿到jq
      var it = $('source')//拿到节点

       //判断一下如果dome节点存在的话执行操作
      if(it && it.length > 0) {
        return it.attr('src')
      }

      return ''
    })
  }

  const data = {
    video,
    doubanId,
    cover: result.cover
  }


  browser.close()

  console.log(result) //上一届吧拿到的数据打印出去

  process.send({data})//把拿到的数据发送出去
  process.exit(0)//进程退出

})()
