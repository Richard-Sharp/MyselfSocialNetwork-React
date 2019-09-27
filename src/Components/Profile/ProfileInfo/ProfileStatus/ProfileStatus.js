import React from 'react';


class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	onEditMode = () => {
		this.setState({
			editMode: true
		});
	}

	offEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateUserStatus(this.state.status);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
				<div>
					{!this.state.editMode
							? <div>
								<span onDoubleClick={this.onEditMode}>
									<h2>{this.props.status || "No status"}</h2>
								</span>
							</div>
							: <div>
								<textarea cols="100" rows="3"
													onChange={this.onStatusChange}
													autoFocus={true}
													value={this.state.status}/>
								<button onClick={this.offEditMode}>Сохранить статус</button>
							</div>
					}
				</div>
		)
	}
}

export default ProfileStatus;