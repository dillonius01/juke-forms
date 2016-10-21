import React from 'react';
import { connect } from 'react-redux';
import PlaylistDecorator from './PlaylistDecorator';
import { addPlaylist } from '../../ducks/playlist';

const mapStateToProps = ({ playlists }) => ({
	playlists
});

const mapDispatchToProps = dispatch => ({
	addPlaylist: (newPlaylist) => dispatch(addPlaylist(newPlaylist))
});

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(PlaylistDecorator);
export default PlaylistContainer;

