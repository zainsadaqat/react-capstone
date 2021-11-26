import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEnglandData } from '../../../store/actions/index';
import RightArrow from '../../../assets/icons/right-arrow-circle-icon.svg';

const EnglandData = ({ england }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEnglandData());
  }, []);

  return (
    <div>
      <h2 className="country-name">England Data</h2>
      <ol className="card">
        {england.map((data) => (
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

export default EnglandData;

EnglandData.propTypes = {
  england: PropTypes.arrayOf(PropTypes.object).isRequired,
};
