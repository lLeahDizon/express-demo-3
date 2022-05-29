const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('yyy'))

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
