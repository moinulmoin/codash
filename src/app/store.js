import { configureStore } from '@reduxjs/toolkit';
import { countryApi } from './countryApi';
import overviewReducer from './overviewSlice';

const store = configureStore({
	reducer: {
		overview: overviewReducer,
		[countryApi.reducerPath]: countryApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(countryApi.middleware),
});

export default store;
