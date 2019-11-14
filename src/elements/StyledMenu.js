import styled from 'styled-components';
import theme from '../themes/theme';

export default styled.div`
    margin: 0 0 10px 0;
    border-bottom: 1px solid ${theme.secondaryBorderColor};
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin: 7px 7px 7px 0;
            display: inline-block;
            a {
                padding: 10px;
                color: ${theme.secondaryColor};
                font-size: ${theme.mediumFont};
                font-family: ${theme.mainFont};
            }
            a.active, a:hover {
                color: ${theme.primaryColor};
                text-decoration: none;
                border-bottom: 2px solid ${theme.primaryColor};
            }
        }
    }
`