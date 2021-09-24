// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

export default function handler(req, res) {
  const httpLink = createHttpLink({
    uri: "https://tessjean-test.myshopify.com/admin/api/2021-07/graphql.json",
  });

  const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        "X-Shopify-Access-Token": "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"
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });



  res.status(200).json({ name: 'John Doe' })
}
