// eslint-disable-next-line
import { useState, useEffect, useCallback } from "react";
import AuthContext from "./auth-context";

export const AuthProvider = (props) => {
	const [token, setToken] = useState();
    const [userId, setUserId] = useState();
	const [userFullname, setUserFullname] = useState();
	const [userEmail, setUserEmail] = useState();

	// useEffect(() => {
	// 	const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

	// 	if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
	// }, []);

	const loginHandler = useCallback((uid, token, fullname, email) => {
        setUserId(uid);
		setToken(token);
		setUserFullname(fullname);
		setUserEmail(email);

	}, [token]);
	const logoutHandler = useCallback(() => {
        setUserId(null);
		setToken(null);
		setUserFullname(null);
		setUserEmail(null);

	}, [token]);

	const authContext = {
		isLoggedIn: !!token, // will be converted to true if there is a token OR false otherwise
        token: token,
        userId: userId,
		userFullname: userFullname,
		userEmail: userEmail,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{props.children}
		</AuthContext.Provider>
	);
};
