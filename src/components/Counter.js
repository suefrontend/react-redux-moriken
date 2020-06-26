import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from '../constants/action-types';

const mapStateToProps = (state) => {
	return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: INCREMENT }),
		decrement: () => dispatch({ type: DECREMENT }),
		reset: () => dispatch({ type: RESET }),
	};
};

const Counter = ({ count, increment, decrement, reset }) => {
	return (
		<div className='container'>
			<div className='box'>
				<span>{count}</span>
				<div className='control'>
					<button onClick={increment}>+</button>
					<button onClick={decrement}>-</button>
					<button onClick={reset}>RESET</button>
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
