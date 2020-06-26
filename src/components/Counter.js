import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from '../constants/acion-types';

const mapStateToProps = (state) => {
	return { count: state.count };
};

const Counter = ({ count, dispatch }) => {
	return (
		<div className='container'>
			<div className='box'>
				<span>{count}</span>
				<div className='control'>
					<button onClick={() => dispatch({ type: INCREMENT })}>+</button>
					<button onClick={() => dispatch({ type: DECREMENT })}>-</button>
					<button onClick={() => dispatch({ type: RESET })}>RESET</button>
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(Counter);
