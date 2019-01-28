import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import Page from '../components/Page';
import withData from '../lib/withData'; // Apollo Client Wrapper

class MyApp extends App {
  // @desc
  // Nextjs lifecycle method that runs before render
  // works both on the server-side and client side.
  // Its able to read the browsers url bar from something called context.
  // Context also contains other useful things like access to cookies.
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
