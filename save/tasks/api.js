//http://api.douban.com/v2/movie/subject/1764796

const rp = require('request-promise-native')//是require库的上岑封装这样就可以中间调用了

async function fetchMovie (item ) {
  const url = 'http://api.douban.com/v2/movie/subject/${item.doubanId}'

  const res = await  rp(url)//调用rp拿到返回数据和路径

  return res
}


;(async () => {
  let  movies = [
    { title: '雷霆沙赞！',
      rate: 6.6,
      poster:
        'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2551249211.jpg' },
    { title: '飞驰人生',
      rate: 7,
      poster:
        'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2542973862.jpg' },
  ]

  movies.map(async movies => {
    let movieData = await fetchMovie(movies)

    console.log(movieData)
  })
})()