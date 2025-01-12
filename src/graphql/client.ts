import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || 'https://us-west-2.cdn.hygraph.com/content/cm5ilzcui01ij07wdc98pzkfj/master'

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
