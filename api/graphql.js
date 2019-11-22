const {
  graphql,
  buildSchema
} = require('graphql')
const cors = require('micro-cors')()

const schema = buildSchema(`
  type Vote {
    _id: ID!
    count: Int,
    value: Int,
  }

  type Query {
    vote: Vote
  }

  type Mutation {
    addVote : Vote
  }
`)

const store = {
  vote: {
    _id: 'singleVote',
    count: 0,
    value: 0
  }
}

const seconds = (duration) => new Promise((resolve) => setTimeout(resolve, duration * 1000))

const resolvers = {
  vote: () => store.vote,
  addVote: async () => {
    await seconds(3)
    store.vote.count +=1;
    store.vote.value +=5;
    return store.vote
  }
}

const handler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.json('');
  }
  const result = await graphql(schema, req.body.query, resolvers, {}, req.body.variables)
  return res.json(result)
}


module.exports = cors(handler)
