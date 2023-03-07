const express = require('express')
const app = express()
const fn1 = require('./fn1')

app.set('views', 'lemon')
app.set('view engine', 'ejs')

app.get('/users/:id', (request, response, next) => {
  console.log('request.xhr')
  console.log(request.xhr)
  response.send('hi')
  next()
})

app.listen(3000, () => {
  console.log('listen 成功')
})
