import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

function Title({ style, text }) {
    return (
        <Container
            style={style}
        >
            {text}
        </Container>
    );
}

Title.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    text: PropTypes.string,
};

Title.defaultProps = {
    style: {},
    text: 'Title',
};

export default Title;