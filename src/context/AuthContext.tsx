import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  username: string;
  password: string;
  handleLogin: (enteredUsername: string, enteredPassword: string) => void;
  handleLogout: () => void;
};

type AuthContextProviderType = {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  username: "",
  password: "",
  handleLogin: () => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children } : AuthContextProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Dummy username and password data
  const dummyUsername = "john.doe@moneeyapp.com";
  const dummyPassword = "password123";

  useEffect(() => {
    // Log out the user every two minutes
    const interval = setInterval(() => {
      setIsLoggedIn(false);
      setUsername("");
        setPassword("");
        console.log("clearrrrrrrrr")
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (enteredUsername: string, enteredPassword: string) => {
    // Check if the entered username and password match the dummy data
    if (
      enteredUsername === dummyUsername &&
      enteredPassword === dummyPassword
    ) {
      setIsLoggedIn(true);
      setUsername(enteredUsername);
      setPassword(enteredPassword);
      //console.log(enteredPassword, enteredUsername)
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        username,
        password,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
    return useContext(AuthContext)
}

export { AuthContext, AuthProvider, useAuth };
