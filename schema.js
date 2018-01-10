import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Author {
  age: Int
  name: String
  books: [String]
}
type Query {
  authors: [Author]
  author(id: Int): Author
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema