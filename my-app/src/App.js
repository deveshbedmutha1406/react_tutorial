import Navbar from './Navbar';
import Home from './home';
// cant put objects directly. it is not ABLE TO convert it to string
function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
  
    </div>

  );
}

export default App;
 