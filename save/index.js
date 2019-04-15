const  koa = require('koa')
const  app = new koa()
const views = require('koa-views')
const { resolve} = require('path')

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx,next) => {
  await  ctx.render('index',{
      you: 'Luck',
      me: 'Scott'
  })
})
app.listen(4455)