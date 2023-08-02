import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthState>({
  isAuthed: true,
  setIsAuthed: () => {},
});

export const AuthContextProvider: React.FC = ({ children }: React.reactNode ) => {
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
