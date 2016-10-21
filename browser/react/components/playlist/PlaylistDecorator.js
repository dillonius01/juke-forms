import React from 'react';
import Playlist from './Playlist';

class PlaylistDecorator extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			inputText: ''
		};
		this.updateInput = this.updateInput.bind(this);
		this.submitNewPlaylist = this.submitNewPlaylist.bind(this);

	}

	updateInput (evt) {
		const newPlaylistName = evt.target.value;
		this.setState({inputText: newPlaylistName});
		console.log('inputText updated to: ', this.state.inputText);
	}

	submitNewPlaylist (evt) {
		evt.preventDefault();
		this.setState({inputText: ''})
		console.log('inputText is now: ', this.state.inputText)
	}

	render () {
		return (
			<Playlist 
				playlists={this.props.playlists}
				updateInput={this.updateInput}
				submitNewPlaylist={this.submitNewPlaylist}
				addPlaylist={this.props.addPlaylist}
				inputValue={this.state.inputText}
			/>
		)
	}
}


export default PlaylistDecorator;