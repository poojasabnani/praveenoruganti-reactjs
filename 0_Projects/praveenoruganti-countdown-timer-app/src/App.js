import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [day, setDay] = useState(0);
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			let year = new Date().getFullYear() +1
			let christmas = new Date(`Jan 01, ${year}`).getTime();
			let today = new Date().getTime();

			setDay(Math.floor((christmas - today) / (1000 * 60 * 60 * 24)));
			setHour(
				Math.floor(((christmas - today) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			);
			setMinute(Math.floor(((christmas - today) % (1000 * 60 * 60)) / (1000 * 60)));
			setSecond(Math.floor(((christmas - today) % (1000 * 60)) / 1000));
			if ((christmas - today) < 0) {
				clearInterval(interval);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='App'>
			<p>Happy New Year</p>
			<div className='App__time'>
				<h1>{day}</h1>
				<h1>{hour}</h1>
				<h1>{minute}</h1>
				<h1>{second}</h1>
			</div>
			<div className='App__labels'>
				<h5>days</h5>
				<h5>hours</h5>
				<h5>mins</h5>
				<h5>secs</h5>
			</div>
		</div>
	);
}

export default App;
