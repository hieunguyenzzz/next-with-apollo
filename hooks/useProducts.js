import {useMemo} from "react";
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS_QUERY} from "../graphql";


export const useProducts = ({ query = "" } = {}) => {
    const { data, loading } = useQuery(GET_PRODUCTS_QUERY, {
        variables: { query },
        fetchPolicy: "network-only",
    });

    const products = useMemo(() => {
        if (!data) {
            return [];
        }

        return data.products;
    }, [data]);

    return useMemo(() => ({ products, loading }), [products, loading]);
};