import styled from 'styled-components';
import theme from '../themes/theme';

export default styled.button`
  font-family: ${theme.mainFont};
  font-size: ${theme.smallFont};
  height: 30px;
  width: 120px;
  display: block;
  font-weight: bold;
  color: ${(props) => (props.buttonType === 'randomized' ? theme.primaryColor : theme.secondaryColor)};
  border: 1px solid ${(props) => (props.buttonType === 'randomized' ? theme.primaryColor : theme.secondaryColor)};
  border-radius: 30px;
  cursor: pointer;
  background-color: ${theme.primaryBackground};
  &:focus {
    outline: none;
  }
  &:first-child {
    margin: 0 0 5px 0;
  }
`