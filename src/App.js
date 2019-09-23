import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Action from './components/Action';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/update/:id' component={Action} />
      </BrowserRouter>
    </div>
  );
}

export default App;
