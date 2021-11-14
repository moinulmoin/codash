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
			state.covidData = action.payload;
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
