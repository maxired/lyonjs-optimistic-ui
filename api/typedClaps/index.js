const { graphql, buildSchema } = require('graphql')
const cors = require('micro-cors')()

const { resolvers, schema } = require('./_handlers')

const graphQLSchema = buildSchema(schema);

const handler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.json('');
  }
  const result = await graphql(graphQLSchema, req.body.query, resolvers, {}, req.body.variables)
  return res.json(result)
}


module.exports = cors(handler)
