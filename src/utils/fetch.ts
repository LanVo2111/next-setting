import { CardItemType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3010";

const request = {
  get: async <T>(url: string): Promise<T | null> => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, {
        method: "GET",
      });

      if (!response.ok) {
        console.error("Error:", response.statusText);
        return null as T;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
      return null as T;
    }
  },
  post: async <T>(url: string, data: any): Promise<T | null> => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Error:", response.statusText);
        return null;
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
      return null as T;
    }
  },
};

export const Product = {
  getProducts: (): Promise<Array<CardItemType> | null> =>
    request.get("products"),
  getProductDetail: (id: number): Promise<CardItemType | null> =>
    request.get(`product/${id}`),
};

const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

export const api = createApi({
  // Set the baseUrl for every endpoint below
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL || BASE_URL,
    timeout: 1000,
  }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => `products`,
    }),
    getProductDetail: builder.query({
      query: (id: number | string) => `product/${id}`,
      // serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
      //   const id = queryArgs;
      //   return { id };
      // },
      // forceRefetch({ currentArg, previousArg }) {
      //   return currentArg !== previousArg;
      // },
    }),
    getRelatedProduct: builder.query({
      query: (id: number | string) => `product/related/${id}`,
    }),
    getProductByCategories: builder.query({
      query: (id: number | undefined) => `categories/${id}`,
    }),
    getCategoriesList: builder.query({
      query: () => `categories`,
    }),
    getInstaImage: builder.query({
      query: () => `insta`,
    }),
    getBlogList: builder.query({
      query: () => `blog`,
    }),
    getBlogDetail: builder.query({
      query: (id: number | string) => `blog/${id}`,
    }),
    getRelatedBlog: builder.query({
      query: (id: number) => `blog/related/${id}`,
    }),
  }),
});

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    if (res.status === 404) {
      console.log(`Data not found`);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("An error occurred when get works", getErrorMessage(error));
    // throw error;
    return null;
  }
}

export const {
  useGetProductListQuery,
  useGetProductDetailQuery,
  useGetRelatedProductQuery,
  useGetCategoriesListQuery,
  useGetProductByCategoriesQuery,
  useGetInstaImageQuery,
  useGetBlogListQuery,
  useGetBlogDetailQuery,
  useGetRelatedBlogQuery,
} = api;
