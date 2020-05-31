import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextBlock from '../../molecules/TextBlock';

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text-block {
        margin-bottom: 5px;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

        .text-block {
            margin-bottom: 0px;
            margin-right: 10px;

            &:last-child {
                margin-right: 0px;
            }
        }
    }
`;

function ThreeTextBlocks({ style, contexts }) {
    return (
        <Container
            style={style}
        >
            {contexts.map((context) => <TextBlock style={{ width: 200 }} title={context.title} context={context.context} />)}
        </Container>
    );
}

ThreeTextBlocks.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    contexts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        context: PropTypes.string,
    })),
};

ThreeTextBlocks.defaultProps = {
    style: {},
    contexts: [
        {
            title: 'Title 1',
            context: 'bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 bla bla bla 1 ',
        },
        {
            title: 'Title 2',
            context: 'bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 bla bla bla 2 ',
        },
        {
            title: 'Title 3',
            context: 'bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 bla bla bla 3 ',
        },
    ],
};

export default ThreeTextBlocks;