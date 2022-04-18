import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countryApi = createApi({
	reducerPath: 'countryApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://covid-193.p.rapidapi.com/',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Host', 'covid-193.p.rapidapi.com');
			headers.set(
				'X-RapidAPI-Key',
				'e4ad2524demshfbd8a3a4ce7e5b1p1fdf0ejsn4f1da8160cc1'
			);

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getAllCountries: builder.query({ query: () => 'statistics' }),
	}),
});

export const { useGetAllCountriesQuery } = countryApi;
