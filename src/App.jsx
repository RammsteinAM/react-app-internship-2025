import AuthProvider from './context/AuthProvider';
import AppNav from './layouts/AppNav';
import Content from './layouts/Content';

function App() {
  return (
    <AuthProvider>
      <AppNav />
      <Content />
    </AuthProvider>
  );
}

export default App;
