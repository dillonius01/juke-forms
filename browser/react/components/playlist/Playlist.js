import React from 'react';

class Playlist extends React.Component {
	
	constructor(props) {
		super(props)
	}


	render () {
		const inputValue = this.props.inputValue;
		const updateInput = this.props.updateInput;
		const submitNewPlaylist = this.props.submitNewPlaylist;

		return (
			<div className="well">
			  <form className="form-horizontal" onSubmit={ submitNewPlaylist }>
			    <fieldset>
			      <legend>New Playlist</legend>
			      <div className="form-group">
			        <label className="col-xs-2 control-label">Name</label>
			        <div className="col-xs-10">
			          <input className="form-control" type="text" value={inputValue} onChange={ updateInput }/>
			        </div>
			      </div>
			      <div className="form-group">
			        <div className="col-xs-10 col-xs-offset-2">
			          <button type="submit" className="btn btn-success">Create Playlist</button>
			        </div>
			      </div>
			    </fieldset>
			  </form>
			</div>
		);
	}
}

export default Playlist;
