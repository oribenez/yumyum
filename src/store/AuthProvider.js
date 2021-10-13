import { useState, useEffect, useCallback } from "react";
import { AuthContext } from "./auth-context";

export const AuthProvider = (props) => {
	const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);

	// useEffect(() => {
	// 	const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

	// 	if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
	// }, []);

	const loginHandler = useCallback((uid, token) => {
		setToken(token);
        setUserId(uid);
	}, []);
	const logoutHandler = useCallback(() => {
		setToken(token);
        setUserId(null);
	}, []);

	const authContext = {
		isLoggedIn: !!token, // will be converted to true if there is a token OR false otherwise
        token: token,
        userId: userId,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{props.children}
		</AuthContext.Provider>
	);
};
