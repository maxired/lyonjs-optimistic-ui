const seconds = (duration) => new Promise((resolve) => setTimeout(resolve, duration * 1000))
const store = {
  claps: 0
}

const schema = `
  type Query {
    claps: Int
  }

  type Mutation {
    clap : String
    clapWithValue: Int
  }
`
const resolvers = {
  claps: () => store.claps,
  clap: async () => {
    await seconds(3)
    store.claps += 1;
    return 'ok'
  },
  clapWithValue: async () => {
    await seconds(3)
    store.claps += 1;
    return store.claps
  }
}

module.exports = { schema, resolvers }
