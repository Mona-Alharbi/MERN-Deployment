import './App.css';
import { Router } from '@reach/router';
import { useState } from 'react';
import './App.css';
import Dashboard from "./views/Dashboard";
import Login from './views/Login';
import Register from './views/Register';
import About from './views/About';
import New from './views/New';
import FirstPage from './views/FirstPage'
function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {/* Good place for a header w/ links */}
      <Router>
        <FirstPage path="/" setUser={setUser}/>
        <Register path="/register" setUser={setUser} />
        <Login path="/login" setUser={setUser}  />
        <Dashboard path="/dashboard" user={user} />
        <New path="/new"/>
        <About path="/about/:id"/>
      </Router>
      {/* footer */}
    </div>
  )
}

export default App;