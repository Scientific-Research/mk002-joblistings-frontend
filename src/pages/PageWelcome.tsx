import { useState, useEffect } from 'react';
const backendURL = `http://localhost:3014`;

export const PageWelcome = () => {
	const [jobs, setJobs] = useState([]);
	return (
		<div className="pageWelcome">
			<p>There are nn job listings.</p>
		</div>
	);
};
