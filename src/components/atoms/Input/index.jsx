import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.input`
    font-size: 12px;
    font-weight: bold;
    min-width: 100px;
    height: 30px;
    padding: 0px 5px;
`;

function Input({ onChange, style, placeholder }) {
    return (
        <Container
            onChange={onChange}
            style={style}
            placeholder={placeholder}
        />
    );
}

Input.propTypes = {
    onChange: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    onChange: () => {},
    style: {},
    placeholder: 'Type here',
};

export default Input;