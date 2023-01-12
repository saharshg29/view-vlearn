import './App.css';
import Login from './components/Login';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
