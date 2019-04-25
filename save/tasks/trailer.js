const cp = require('child_process')
const { resolve} = require('path')//拼接路径

;(async () => {
  const script = resolve(__dirname, '../crawler/video')//拿到脚本拼接路径
  const child =  cp.fork(script, [])//调用子进程cp.方法在传入参数
  let invoked = false //标识符看看子进程洋浦没有跑起来

  //回调函数监听异常
  child.on('error',err => {
    if (invoked) return

    invoked = true

    console.log(err)
  })

  //当进程退出的时候如果为
  child.on('exit',code => {
    if(invoked) return//调用过的话不做任何处理否则

    invoked = true //标识符等于false
    let err = code === 0 ? null : new Error('exit code' + code)//判断他是不是0如果不是的话拼接..

    console.log(err)
  })
//对这个消息事件进行监听消息和数据
  child.on('message', data => {

    console.log(data)
  })

})()