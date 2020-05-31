import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 11px;
`;

function Context({ style, text }) {
    return (
        <Text
            style={style}
        >
            {text}
        </Text>
    );
}

Context.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    text: PropTypes.string,
};

Context.defaultProps = {
    style: {},
    text: 'bla bla bla',
};

export default Context;