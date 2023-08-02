import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthState>({
  isAuthed: false,
  setIsAuthed: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
