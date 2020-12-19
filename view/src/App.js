import logo from './logo.svg';
import Application from "./Components/Application"
import './App.css';
import UserProvider from "./providers/UserProvider"

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
