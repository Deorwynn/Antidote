import styled from 'styled-components';
import theme from '../themes/theme';

export default styled.div`
    border: 1px solid ${theme.secondaryBorderColor};
    > div {
        display: flex;
    }
    p {
        margin: 0;
        font-family: ${theme.mainFont};
    }
    .table-header {
        color: ${theme.infoColor};
        font-weight: bold;
        font-size: ${theme.smallFont};
        border-bottom: 1px solid ${theme.secondaryBorderColor};
        background-color: ${theme.primaryBackground};
        p {
            padding: 5px;
        }
    }
    .table-row:nth-child(even) {
        background-color: ${theme.secondaryBackground};
    }
    .table-row > div {
        padding: 10px;
        height: 80px;
        .main-info {
            display: inline;
            font-weight: bold;
            font-size: ${theme.mediumFont};
            color: ${theme.infoColor};
            border-bottom: 1px solid ${theme.infoColor};
        }
        .secondary-info {
            color: ${theme.infoColor};
            font-size: ${theme.smallFont}
        }
        .contact-info {
            color: ${theme.primaryColor};
            font-size: ${theme.smallFont}
        }
    }
    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-left: 1px solid ${theme.secondaryBorderColor};
        .has-status {
            color: ${theme.secondaryColor};
            font-size: ${theme.smallFont};
        }
    }
`