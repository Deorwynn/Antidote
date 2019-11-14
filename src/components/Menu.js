import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import StyledMenu from '../elements/StyledMenu';
import Title from '../elements/Title';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    inactivePatients: state.inactivePatients,
    randomizedPatients: state.randomizedPatients
});

const Menu = (props) => {
  const { all, randomizedPatients, inactivePatients } = props;

  return(
      <header>
          <Title>Patients</Title>
          <StyledMenu>
            <ul>
                <li>
                    <NavLink to="randomized">Randomized ({randomizedPatients})</NavLink>
                </li>
                <li>
                    <NavLink to="inactive">Inactive ({inactivePatients})</NavLink>
                </li>
                <li>
                    <NavLink exact to="/">All ({all})</NavLink>
                </li>
            </ul>
        </StyledMenu>
      </header>
  );
}

export default connect(
    mapStateToProps,
    null
  )(Menu);

Menu.propTypes = {
    all: PropTypes.number,
    inactivePatients: PropTypes.number,
    randomizedPatients: PropTypes.number
}

Menu.defaultProps = {
    all: null,
    inactivePatients: null,
    randomizedPatients: null
}