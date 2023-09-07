import { QueryClient } from "@tanstack/react-query";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";
import { LoaderFunctionArgs } from "react-router-dom";
import {
  IProductSearchQueryParams,
  IProductSearchResult,
} from "../types/Product";

const allProductsQuery = (queryParams: IProductSearchQueryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response: { data: IProductSearchResult } =
      await queryClient.ensureQueryData(allProductsQuery(params));
    const products = response.data.data;
    const meta = response.data.meta;
    const temp = { products, meta, params };
    return temp;
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
