import { createContext } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userId: null,
    userFullname: null,
    userEmail: null,
    login: () => {},
    logout: () => {}
});

export default AuthContext;

