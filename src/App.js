import Sidebar from "./containers/Sidebar";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";
import './app.css'

function App() {
  return (

    <div className="App">
      <Sidebar />
      <div className="content">
      <Navbar className="navbar"/>
      <Main className="main" />
      </div>
    </div>
  );
}

export default App;
