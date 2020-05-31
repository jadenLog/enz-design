import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

function Form({
    style,
    onSubmit,
    title,
    buttonText,
}) {
    return (
        <Container
            style={style}
        >
            <Label text={title} />
            <BottomWrapper>
                <Input style={{ width: '100%' }} />
                <Button text={buttonText} onClick={onSubmit} style={{ marginLeft: 5 }} />
            </BottomWrapper>
        </Container>
    );
}

Form.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    buttonText: PropTypes.string,
};

Form.defaultProps = {
    style: {},
    onSubmit: () => {},
    title: 'form',
    buttonText: 'Submit',
};

export default Form;