import { createSlice } from '@reduxjs/toolkit';

const overviewSlice = createSlice({
	name: 'overview',
	initialState: {
		searchTerm: '',
		covidData: [],
		currentPage: 1,
		pageSize: 10,
	},
	reducers: {
		getSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		getCovidData: (state, action) => {
			if (action.payload.length > 0) {
				const sortedData = action.payload.slice().sort((a, b) => {
					if (a.country > b.country) {
						return 1;
					}
					if (a.country < b.country) {
						return -1;
					}
					return 0;
				});
				const allCountryIndex = sortedData.findIndex(
					(eachCountry) => eachCountry.country === 'All'
				);
				const allCountry = sortedData.splice(allCountryIndex, 1);
				sortedData.unshift(allCountry[0]);
				state.covidData = sortedData;
			}
		},
		getNextPage: (state, action) => {
			state.currentPage += 1;
		},
		getPrevPage: (state, action) => {
			state.currentPage -= 1;
		},
	},
});

export const { getSearchTerm, getCovidData, getNextPage, getPrevPage } =
	overviewSlice.actions;

export default overviewSlice.reducer;
