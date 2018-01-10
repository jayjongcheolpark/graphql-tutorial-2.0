import mongoose from 'mongoose'
import authorModel from './models/author'

const resolvers = {
  Query: {
    authors: () => {
    },
    author: (root, args) => {
      return authors.find(author => author.id === args.id)
    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new authorModel({ age, name, books })
      return author.save()
    }
  }
}

export default resolvers