import React from 'react';
import preloaderImg from '../../../img/ajax-loader.gif'

let Preloader = (props) => {
	return <div>
		<img src={preloaderImg}
				 style={ {width: '100px', height: '100px'} }
				 alt="preloader"/>
	</div>
}

export default Preloader;