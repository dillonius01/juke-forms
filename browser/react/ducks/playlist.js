'use strict';

// Action Types
const ADD_PLAYLIST = 'ADD_PLAYLIST';


// Action Creators
export const addPlaylist = (playlist) => ({
	type: ADD_PLAYLIST,
	playlist
});


// Thunk Creators


// Reducer
export default (state = [], action) => {
	switch (action.type) {
		case ADD_PLAYLIST:
			console.log('add playlist!!!!');
			return [...state, action.playlist];
		default:
			return state;
	}
};

