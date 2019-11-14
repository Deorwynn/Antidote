import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../components/Button';
import StyledTable from '../elements/StyledTable';
import { connect } from 'react-redux';
import { updateInactivePatients, updateRandomizedPatients } from '../redux';

const mapStateToProps = state => ({
    inactive: state.inactive,
    randomized: state.randomized
  });
  
  const mapDispatchToProps = (dispatch) => {
      return {
        updateInactive: (newInactiveCount) => dispatch(updateInactivePatients(newInactiveCount)),
        updateRandomized: (newRandomizedCount) => dispatch(updateRandomizedPatients(newRandomizedCount))
      }
  };

const Table = (props) => {
    const { type, allPatients, inactivePatients, randomizedPatients, updateInactive, updateRandomized } = props;
    const [ currentInactivePatients, setInactivePatients ] = useState();
    const [ currentRandomizedPatients, setRandomizedPatients ] = useState();

    let patients;
    let inactive = inactivePatients;
    let randomized = randomizedPatients;
    if(type === 'inactive') {
        patients = inactivePatients
    } else if(type === 'randomized') {
        patients = randomizedPatients
    } else {
        patients = allPatients
        
    }
    
    const tableRows = patients.map(patient => {

        const handleClick = (e, statusType) => {
            if(statusType === 'inactive') {
                patient.status = statusType;
                setInactivePatients(inactive.push(patient))
                updateInactive(inactive.length);
                inactive = currentInactivePatients;
                
            } else if(statusType === 'randomized') {
                patient.status = statusType;
                setRandomizedPatients(randomized.push(patient))
                updateRandomized(randomized.length);
                patients = currentRandomizedPatients;
            }
        }

        let status;
        if(patient.status === 'inactive') {
            status = <p className="has-status">Inactive</p>
        } else if(patient.status === 'randomized') {
            status = <p className="has-status">Randomized</p>
        } else {
            status = (
                <div>
                    <Button buttonType="randomized" handleClick={handleClick} />
                    <Button buttonType="inactive" handleClick={handleClick} />
                </div>
            )
        }

        return(
            <div className="table-row" key={patient.location.locationId}>
                <div className="col-md-8">
                    <p className="main-info">
                        {patient.location.locationId} – {patient.account.firstName} {patient.account.lastName}
                    </p>
                    <p className="secondary-info">
                        {patient.location.city}, {patient.location.countryCode}
                    </p>
                    <p className="contact-info">
                        {patient.account.phone}, {patient.account.email}
                    </p>
                </div>
                <div className="col-md-4 button-wrapper">
                    { status }
                </div>
            </div>
        )
    })

  return(
    <StyledTable>
        <div className="table-header">
            <div className="col-md-8"><p>Patient Details</p></div>
            <div className="col-md-4 button-wrapper"></div>
        </div>
        { tableRows }
    </StyledTable>
  );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Table);

Table.propTypes = {
    type: PropTypes.string.isRequired,
    allPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
    inactivePatients: PropTypes.arrayOf(PropTypes.object).isRequired,
    randomizedPatients: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateInactive: PropTypes.func.isRequired,
    updateRandomized: PropTypes.func.isRequired
}