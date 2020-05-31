import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form/index';
import TextBlock from './TextBlock/index';

const stroy = storiesOf('Molecules', module);

stroy.add('form', () => <Form />);
stroy.add('text block', () => (
    <div>
        <TextBlock />
    </div>
));