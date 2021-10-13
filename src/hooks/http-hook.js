import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const activeHttpRequests = useRef([]); //   case: user change to different page while request is loading

	const sendRequest = useCallback(
		async (url, method = "GET", body = null, headers = {}) => {
			const httpAbortCtrl = new AbortController();
			activeHttpRequests.current.push(httpAbortCtrl);

			setIsLoading(true);

			try {
				const response = await fetch(url, {
					method,
					body,
					headers,
					signal: httpAbortCtrl.signal,
				});

				const responseData = await response.json();

				activeHttpRequests.current = activeHttpRequests.current.filter(
					(reqCtrl) => reqCtrl !== httpAbortCtrl
				);

				if (!response.ok) throw new Error(responseData.message);

				setIsLoading(false);
				return responseData;
			} catch (error) {
				setError(
					error.message || "Something went wrong, pleasetry again later."
				);
				setIsLoading(false);
				throw error;
			}
		},
		[]
	);

	const clearError = () => {
		setError(null);
	};

	// make sure that the request will abort if the user decide to move to a different page
	useEffect(() => {
		return () => {
			activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
		};
	}, []);

	return { isLoading, error, sendRequest, clearError };
};
