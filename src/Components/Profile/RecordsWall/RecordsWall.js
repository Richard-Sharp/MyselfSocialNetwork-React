import React from 'react';
import style from './RecordsWall.module.css';
import Record from "./Records/Record";




const RecordsWall = (props) => {
	let recordsList = props.records.map(r => <Record userName={r.name} record={r.record} id={r.id} />)

	let newRecordElement = React.createRef();

	let onAddRecord = () => {
		props.addRecord(props.newRecordText);
	}

	let onRecordChange = () => {
		let text = newRecordElement.current.value;
		props.updateNewRecordText(text);
	}
   return (
       	<div className={`${style.prof_settings} ${style.profile_records}`}>
			<h2>Моя стена:</h2><br/>
					<div className={style.add_record}>
						<textarea onChange={onRecordChange} ref={newRecordElement} className={style.textArea} value={props.newRecordText} cols="100" rows="3"/>

						<button className={style.button} onClick={onAddRecord}>Добавить запись</button>
					</div>
					{recordsList}
		</div>
    );
    }

export default RecordsWall;

