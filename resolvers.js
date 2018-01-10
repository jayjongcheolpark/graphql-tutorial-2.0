const resolvers = {
  Query: {
    authors: () => {
    },
    author: (root, args) => {
      return authors.find(author => author.id === args.id)
    }
  }
}

export default resolvers