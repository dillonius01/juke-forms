import React from 'react';

export default class Form extends React.Component {

	render() {

		return (

			<form className="form-group">
				<input className="form-control" name="post" type="text" onChange={ this.props.handleType } />
				<label htmlFor="post">{ this.props.filter }</label>
			</form>

		)
	}
}