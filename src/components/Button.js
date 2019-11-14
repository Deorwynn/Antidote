import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../elements/StyledButton';

const button = (props) => {
    const { handleClick } = props;
    const buttonType = props.buttonType;

    return(
        <StyledButton {...props} onClick={(e) => handleClick(e, buttonType)}>
            { buttonType }
        </StyledButton>
    )
}

export default button;

button.propTypes = {
    handleClick: PropTypes.func.isRequired
}