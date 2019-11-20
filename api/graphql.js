// curl -X POST https://gatsby-functions.maxired.now.sh/api/graphql  -d '{"variables": { "id": "123" }, "query": "query Product($id: String!) { product(id: $id){name} }"}' -H "Content-Type: application/json"  -vvv

const {
  graphql,
  buildSchema
} = require('graphql')
const cors = require('micro-cors')()

const schema = buildSchema(`
  type Product {
    id: String!
    name: String!
    price: String!
  }

  type Order {
    id: String!
    customerName: String!
    deliveryAddress: String!
    product: Product!
    quantity: Int!
  }

  type Query {
    product(id: String!): Product
    order(id: String!): Order
    test: String
    date: String
  }
`)

const database = require('./_database')
const resolvers = {
  test: () => 'hello world',
  date: () => new Promise(resolve => setTimeout(() => resolve(new Date().toISOString()), 4000)),
  product: ({ id }) => database.products.get(id),
  order: async ({ id }) => {
    const order = await database.orders.get(id)
    if(!order) return null

    return {
      ...order,
      product: () => database.products.get(order.productId)
    }
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
