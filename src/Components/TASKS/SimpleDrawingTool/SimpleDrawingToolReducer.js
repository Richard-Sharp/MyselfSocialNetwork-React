
const CIRCLE_CENTER_DRAW = 'CIRCLE-CENTER-DRAW';
const CIRCLE_RADIUS_DRAW = 'CIRCLE-RADIUS-DRAW';

const POLYGON_POINT_DRAW = 'POLYGON-POINT-DRAW';


let intitialstate = {
	circle: {
		center: {x: 100, y: 100},
		radius: 24
	},
	polygon: {
		polygon: [{x: 5, y: 20}, {x: 40, y: 25},	{x: 50, y: 30}, {x: 50, y: 30}]
	}
};

const SimpleDrawingToolReducer = (state = intitialstate, action) => {
  switch (action.type) {
		case CIRCLE_CENTER_DRAW:
  		return {...state, circle: {...state.circle, center: action.payload}};

  		case POLYGON_POINT_DRAW:
  		return {...state};

		default:
			return state;
	}
}

// export const setCircleCenter = (x, y) => ({type: CIRCLE_CENTER_DRAW, payload: {x, y}});
// export const setCircleRADIUS = (radius) => ({type: CIRCLE_RADIUS_DRAW, payload: {x, y}});

export default SimpleDrawingToolReducer;