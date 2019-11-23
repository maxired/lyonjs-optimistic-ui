const store = {
  clap: {
    _id: 'MyClapId',
    value: 0
  }
}

const schema = buildSchema(`
  type Claps {
    _id: ID!
    value: Int,
  }

  type Query {
    claps: Claps
  }

  type Mutation {
    clap : Claps
  }
`)


const resolvers = {
  claps: () => store.clap,
  clap: async () => {
    await seconds(3)
    store.clap.value +=1;
    return store.clap
  }
}

module.exports = { schema, resolvers }