const express = require('express')
const app = express()
const fn1 = require('./fn1')

app.set('case sensitive routing', true)
app.set('views', 'lemon')
app.set('view engine', 'ejs')
app.locals.title = '我的个人网站'

app.use(express.json())
// app.use(express.static('yyy'))
app.use(express.urlencoded())

app.use(fn1)

app.get('/style.css', (req, res, next) => {
  res.send('style.css')
})

app.get('/STYLE.css', (req, res, next) => {
  res.send('STYLE.css')
})

app.use((request, response, next) => {
  console.log('request.body')
  console.log(request.body)
  console.log(typeof request.body)
  response.send('hi')
  next()
})

app.listen(3000, () => {
  console.log('listen 成功')
})
