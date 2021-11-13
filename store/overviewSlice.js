import { createSlice } from '@reduxjs/toolkit';

const overviewSlice = createSlice({
	name: 'overview',
	initialState: {
		searchTerm: '',
		searchResults: [],
	},
	reducers: {
		getSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		getSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
	},
});

export const { getSearchTerm, getSearchResults } = overviewSlice.actions;

export default overviewSlice.reducer;
