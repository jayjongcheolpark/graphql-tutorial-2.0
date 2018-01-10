import express from 'express'
import {
  graphqlExpress,
  graphiqlExpress
} from 'apollo-server-express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import schema from './schema'

const server = express()

server.use('/graphiql',
  graphiqlExpress({
    endpointURL: "/graphql"
  })
)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/graphqlTutorial', {
  useMongoClient: true
}).then(() => {
  console.log('connection to database was successful')
}).catch(e => {
  console.err(e)
})


server.use('/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

server.listen(4000, () => {
  console.log('listening on port 4000')
})