import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const initialValues = {
	meterNumber: '',
	amount: '',
}

const BElectric = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = e => {
		let { value, name } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		change(state);
		setState(initialValues);
	};

	return (
		<>
			<div className="row">
				<div>
					<label htmlFor="meterNumber">Meter Number</label>
					<input
						id="meterNumber"
						name="meterNumber"
						type="number"
						min="999999"
						max="999999"
						placeholder="Enter the meter number"
						value={state.meterNumber}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="amount">Amount (in frw)</label>
					<input
						id="amount"
						name="amount"
						type="number"
						min="100"
						max="182500"
						placeholder="Enter the amount of money"
						value={state.amount}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={state.meterNumber === '' || state.amount === ''}
					onClick={handleSubmit}
				>
					Buy Electricity
				</button>
			</div>
		</>
	);
};

BElectric.propTypes = {
	change: PropTypes.func.isRequired
};

export default BElectric;
