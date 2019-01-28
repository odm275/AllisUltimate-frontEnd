import withApollo from 'next-with-apollo'; // server-side rendering
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config'; // localhost:4444 for dev

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include', // cookies carry over per request
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
