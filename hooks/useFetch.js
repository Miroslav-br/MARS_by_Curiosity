import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = url => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(url);
			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			setErrorMessage('Bad request');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { data, errorMessage, isLoading };
};
