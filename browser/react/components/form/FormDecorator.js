//  has local UI state
// function that take a component and returns a class
// is a higher order component



import React from 'react';
import Form from './Form';

const FormDecorator = (InnerComponent) => {
	return class StatefulForm extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				filter: ''
			}
			this.handleType = this.handleType.bind(this);
		}

		handleType(evt) {
			this.setState({ filter: evt.target.value });
		} 

		render() {
			return(
				<InnerComponent handleType={ this.handleType } filter={ this.state.filter } />
			)
		}
	}
}

export default FormDecorator(Form);

