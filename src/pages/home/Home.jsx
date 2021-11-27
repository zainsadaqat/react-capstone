import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import RightArrow from '../../assets/icons/right-arrow-circle-icon.svg';
import './Home.css';

const Home = ({ england, ireland, scotland }) => {
  const uk = ['england-and-wales', 'northern-ireland', 'scotland', 'uk'];
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        className="search-bar"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <ul className="wrapper">
        {uk
          .filter((value) => {
            if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
              return value;
            }
          })
          .map((resp, i) => (
            <li key={resp} className="category-box">
              <NavLink to={`/details/:${resp}`}>
                <img
                  src={RightArrow}
                  alt="right arrow circled icons"
                  className="icon"
                />
              </NavLink>
              <div>
                <NavLink to={`/details/:${resp}`} className="category-name">
                  {resp}
                </NavLink>
                <p className="total-holidays">
                  {i === 0 && england.length}
                  {i === 1 && ireland.length}
                  {i === 2 && scotland.length}
                  {i === 3 &&
                    Number(england.length + ireland.length + scotland.length)}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  england: PropTypes.arrayOf(PropTypes.object).isRequired,
  ireland: PropTypes.arrayOf(PropTypes.object).isRequired,
  scotland: PropTypes.arrayOf(PropTypes.object).isRequired,
};
