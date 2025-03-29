import { AuthContext, useProvideAuth } from './authContext';

function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return <AuthContext value={auth}>{children}</AuthContext>;
}

export default AuthProvider;
