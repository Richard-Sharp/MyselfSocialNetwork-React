import React from 'react'
import ReduxFormOld from "./Old RdxForm/ReduxForm(Old)";
import {connect} from "react-redux";

class ReduxFormContainer extends React.Component {
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


export default connect(mstp)(ReduxFormContainer);