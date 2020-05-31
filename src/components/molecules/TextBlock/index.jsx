import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from '../../atoms/Title';
import Context from '../../atoms/Context';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 200px;
`;

function TextBlock({ style, title, context }) {
    return (
        <Container
            className="text-block"
            style={style}
        >
            <Title text={title} />
            <Context text={context} />
        </Container>
    );
}

TextBlock.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string,
    context: PropTypes.string,
};

TextBlock.defaultProps = {
    style: {},
    title: 'Title',
    context: 'TextBlock',
};

export default TextBlock;