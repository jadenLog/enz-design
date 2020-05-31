import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button/index';
import Input from './Input/index';
import Label from './Label/index';
import Title from './Title/index';
import Context from './Context/index';

const story = storiesOf('Atoms', module);

story.add('button', () => <Button />);
story.add('input', () => <Input />);
story.add('label', () => <Label />);
story.add('title', () => <Title />);
story.add('context', () => <Context />);
