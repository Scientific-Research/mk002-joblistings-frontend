import { useState, useEffect } from 'react';
import axios from 'axios';

const backendURL = 'http://localhost:3013';

export const PageWelcome = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(`${backendURL}/jobs`)).data);
		})();
	}, []);

	return (
		<div className="pageWelcome">
			<p>There are {jobs.length} job listings.</p>
		</div>
	);
};
