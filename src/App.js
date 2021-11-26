import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import Error404 from './pages/Error404';

const App = () => {
  const [total, setTotal] = useState([]);

  const england = useSelector((state) => state.Reducer.england);
  const ireland = useSelector((state) => state.Reducer.ireland);
  const scotland = useSelector((state) => state.Reducer.scotland);

  return (
    <Router>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              total={total}
              setTotal={setTotal}
              england={england}
              ireland={ireland}
              scotland={scotland}
            />
          }
        />
        <Route
          path="/details"
          element={
            <Details
              total={total}
              setTotal={setTotal}
              england={england}
              ireland={ireland}
              scotland={scotland}
            />
          }
        />
        <Route
          path="/details/:country"
          element={
            <Details
              total={total}
              setTotal={setTotal}
              england={england}
              ireland={ireland}
              scotland={scotland}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
