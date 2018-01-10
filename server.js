import express from 'express'

const server = express()

server.get('/graphql', (req, res) => {
  res.send('<html><head></head><body>Hello GraphQL</body></html>')
})

server.listen(4000, () => {
  console.log('listening on port 4000')
})