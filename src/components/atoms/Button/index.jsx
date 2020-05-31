import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
    min-width: 40px;
    height: 30px;
    padding: 12px 8px;
    border-width: 0px;
    border-radius: 5px;
    background-color: #27ae60;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
`;

function Button({ style, onClick, text }) {
    return (
        <Container
            onClick={onClick}
            style={style}
        >
            {text}
        </Container>
    );
}

Button.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    onClick: PropTypes.func,
    text: PropTypes.string,
};

Button.defaultProps = {
    style: {},
    onClick: () => {},
    text: 'Button',
};

export default Button;