import React, {useEffect, useState} from 'react';


const ProfileStatusWithHook = (props) => {

	let [editMode, setEditVode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);
	

	const onEditMode = () => {
		setEditVode(true);
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
	const offEditMode = () => {
		setEditVode(false);
	}
	const updateUserStatus = () => {
		offEditMode();
		props.updateUserStatus(status);
	}


	return (
			<div>
				{!editMode &&
				<div>
								<span onDoubleClick={onEditMode}>
									<h2>{props.status || "No status"}</h2>
								</span>
				</div>
				}
				{editMode &&
				<div>
								<textarea cols="100" rows="3"
													onChange={onStatusChange}
													autoFocus={true}
													value={status}/>
					<button onClick={updateUserStatus}>Сохранить статус</button>
					<button onClick={offEditMode}>Отмена</button>
				</div>
				}
			</div>
	)
}


export default ProfileStatusWithHook;