import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62795fd64a5ef80e2c08dee7.mockapi.io/",
  }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "contacts",
    }),
  }),
});

export const { useFetchContactsQuery } = contactApi;
