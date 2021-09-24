const {GraphQLClient, gql} = require('graphql-request');
const dotenv = require("dotenv") ;
dotenv.config();

const shopifyEndpoint = process.env.SHOPIFY_URL;
const appSecret = process.env.SHOPIFY_APP_SECRET;


const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        "X-Shopify-Access-Token": appSecret
    },
})

const GET_PRODUCTS_QUERY = gql`
  {
    products(first: 110) {
      edges {
        node {
          id
          title
          featuredImage {
            id
            originalSrc
          }                  
        }
      }
    }
  }
`;

graphQLClient.request(GET_PRODUCTS_QUERY).then(result => console.log(result))