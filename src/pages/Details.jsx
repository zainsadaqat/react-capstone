import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchEnglandData,
  fetchIrelandData,
  fetchScotlandData,
} from '../store/actions';

const Details = () => {
  const england = useSelector((state) => state.Reducer.england);
  const ireland = useSelector((state) => state.Reducer.ireland);
  const scotland = useSelector((state) => state.Reducer.scotland);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEnglandData());
    dispatch(fetchIrelandData());
    dispatch(fetchScotlandData());
  }, []);

  return (
    <div>
      <h2>England Data</h2>
      <ol>
        {england.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ol>
      <h2>Ireland Data</h2>
      <ol>
        {ireland.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ol>
      <h2>Scotland Data</h2>
      <ol>
        {scotland.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Details;
