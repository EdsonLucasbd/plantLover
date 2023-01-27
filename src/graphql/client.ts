
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_API}`,
});

const authLink = setContext((_, { headers }) => {
  const token = `${process.env.REACT_APP_GRAPHQL_TOKEN}`

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});