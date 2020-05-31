import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.label`
    font-size: 12px;
    font-weight: bold;
`;

function Label({ style, text }) {
    return (
        <Container
            style={style}
        >
            {text}
        </Container>
    );
}

Label.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    text: PropTypes.string,
};

Label.defaultProps = {
    style: {},
    text: 'label',
};

export default Label;