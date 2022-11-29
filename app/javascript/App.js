import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Message } from './components/message';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
        <div className="App">
            <BrowserRouter>
            <Link to="/message">Go page details</Link>
      <Routes>
        <Route path="/message" element={<Message />} />
      </Routes>
            </BrowserRouter>
        </div>
    </Provider>
  )
}

export default App