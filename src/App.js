import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import Error404 from './pages/Error404';
import {
  fetchEnglandData,
  fetchIrelandData,
  fetchScotlandData,
} from './store/actions/index';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEnglandData());
    dispatch(fetchIrelandData());
    dispatch(fetchScotlandData());
  }, []);

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
            <Home england={england} ireland={ireland} scotland={scotland} />
          }
        />
        <Route
          path="/details"
          element={
            <Details england={england} ireland={ireland} scotland={scotland} />
          }
        />
        <Route
          path="/details/:country"
          element={
            <Details england={england} ireland={ireland} scotland={scotland} />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
