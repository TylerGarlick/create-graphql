import { createSchema, createYoga } from 'graphql-yoga'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars'
import gql from 'graphql-tag'

const yoga = createYoga({
  schema: createSchema({
    typeDefs: [
      scalarTypeDefs,
      gql`
        type Query {
          version: String
        }
      `,
    ],
    resolvers: {
      Query: {
        version: () => 'Hello from Yoga in a Bun app!',
      },
    },
  }),
})
//@ts-ignore
const server = Bun.serve(yoga)
console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
)
