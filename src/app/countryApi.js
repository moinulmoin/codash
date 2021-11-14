import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countryApi = createApi({
	reducerPath: 'countryApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://covid19-api.com/',
	}),
	endpoints: (builder) => ({
		getAllCountries: builder.query({ query: () => 'country/all' }),
	}),
});

export const { useGetAllCountriesQuery } = countryApi;
