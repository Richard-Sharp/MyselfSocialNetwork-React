// import React, {useState} from "react";
// import style from './CircleDraw.module.css';
// import {connect} from "react-redux";
//
//
// const drawModes = {
// 	OFF: "OFF",
// 	SET_RADIUS: 'SET_RADIUS',
// 	SET_CIRCLE_CENTER: 'SET_CIRCLE_CENTER',
// 	SET_POLYGON_POINTER: 'SET_POLYGON_POINTER'
// };
//
// const [circleMode, setCircleMode] = useState(drawModes.OFF);
//
// const Map = (props) => {
// 	let onClick = (e) => {
// 		if(circleMode === drawModes.OFF) {
// 			setCircleMode(drawModes.SET_RADIUS);
// 			props.setCircleCenter(e.clientX, e.clientY);
// 		} else {
//
//
// 		}
// 	};
//
// 	const onMouseMove = (e) => {
//
// 	}
//
// 	return (
// 		<div className={style.circle}>
// 			<svg onClick={onClick} width={props.circle.center.x} height={props.circle.center.y}
// 					 xmlns="http://www.w3.org/2000/svg">
// 				<circle cx="50" cy="50" r="50"/>
// 			</svg>
// 			<svg height="250" width="500">
// 				<polygon points="220,10 300,210 170,250 123,234" style={
// 					{
// 						fill: "lime",
// 						stroke: "purple",
// 						strokeWidth: 1
// 					}} />
// 			</svg>
// 		</div>
// 	)
// }
//
//
//
//
// const mapState = (state) => ({
// 	circle: state.drawTools.circle
// })
//
//
//
// export default connect (mapState, {})(Map);