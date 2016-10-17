// has access to app state (redux store)
// will map state, dispatch to props
// will call connect()

import React from 'react';
import { connect } from 'react-redux';
import FormDecorator from './FormDecorator';

const mapStateToProps = (state) => {
	return {
		artists: state.artists
	}
}

// const RECEIVE_FILTERED_ARTISTS = 'RECEIVE_FILTERED_ARTISTS';


// const receiveFilteredArtists = (artists) => {
// 	return {
// 		type: RECEIVE_FILTERED_ARTISTS,
// 		artists
// 	}
// }


// const mapDispatchToProps = (dispatch) => {
// 	const filterArtists = (textInFilter) => {
// 		fetch(`/artists?name=${textInFilter}`)
// 			.then(artists => dispatch(receiveFilteredArtists(artists)))
// 			.catch(err => console.error(err))
// 	}
// }

const FormContainer = connect(mapStateToProps)(FormDecorator)

export default FormContainer;