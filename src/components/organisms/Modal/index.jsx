import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextBlock from '../../molecules/TextBlock';
import Button from '../../atoms/Button';

const Container = styled.div`
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 10px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

function Modal({
    style,
    title,
    context,
    buttons,
}) {
    return (
        <Container
            style={style}
        >
            <TextBlock title={title} context={context} />
            <ButtonWrapper>
                {buttons.map((button) => (
                    <Button
                        style={{ width: '100px' }}
                        text={button.name}
                        onClick={button.onClick}
                    />
                ))}
            </ButtonWrapper>
        </Container>
    );
}

Modal.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string,
    context: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        onClick: PropTypes.func,
    })),
};

Modal.defaultProps = {
    style: {},
    title: 'Modal',
    context: 'bla bla bla',
    buttons: [
        {
            name: 'OK',
            onClick: () => {},
        },
        {
            name: 'Cancel',
            onClick: () => {},
        },
    ],
};

export default Modal;