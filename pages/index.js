import { gql, useQuery } from '@apollo/client';
import {useProducts} from "../hooks/useProducts";


export default function Home() {
  const { loading, error, products } = useProducts();
  console.log(products);
  if (loading) return <p>Loading ...</p>;
  if (products) return <>xxx</>

  return <>aaa</>;
}
