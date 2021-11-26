import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchScotlandData } from '../../../store/actions/index';
import RightArrow from '../../../assets/icons/right-arrow-circle-icon.svg';

const ScotlandData = ({ scotland }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchScotlandData());
  }, []);

  return (
    <div>
      <h2 className="country-name">Scotland Data</h2>
      <ol className="card">
        {scotland.map((data) => (
          <li key={data.id} className="card-items">
            <span className="title">{data.title}</span>
            <span className="sub-portion">
              <span className="date">{data.date}</span>
              <span>
                <img src={RightArrow} alt="right arrow" className="icon" />
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ScotlandData;

ScotlandData.propTypes = {
  scotland: PropTypes.arrayOf(PropTypes.object).isRequired,
};
