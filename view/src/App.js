import Application from "./Components/Application"
import './App.css';
import UserProvider from "./providers/UserProvider"
import {ThemeProvider} from "./providers/ThemeProvider"
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Header />
        <Application />
        <Footer />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
