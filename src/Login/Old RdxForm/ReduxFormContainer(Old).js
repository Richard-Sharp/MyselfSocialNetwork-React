import React from 'react'
import ReduxFormOld from "./ReduxForm(Old)";
import {connect} from "react-redux";

class ReduxFormContainerOld extends React.Component {
	submit = values => {

		console.log(values)
	}
	render() {
		return <ReduxFormOld onSubmit={this.submit} {...this.props}/>
	}
}

let mstp = (state) => {
	return {
		formValue: state.RDXForm.values
	}
}


export default connect(mstp)(ReduxFormContainerOld);