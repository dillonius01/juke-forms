import React from 'react';
import Artists from './Artists';

const ArtistsDecorator = (InnerComponent) => {
	return class StatefulArtists extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				filter: '',
				artists: this.props.artists
			}
			this.handleType = this.handleType.bind(this);
		}

		handleType(evt) {
			this.setState({
				filter: evt.target.value
			});
		} 

		render() {
			return(
				<InnerComponent
					handleType={ this.handleType }
					filter={ this.state.filter }
					artists={ this.props.artists }
				/>
			)
		}
	}
}

export default ArtistsDecorator(Artists);