import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './Modal/index';
import ThreeTextBlocks from './ThreeTextBlocks/index';

const stroy = storiesOf('Organisms', module);

stroy.add('modal', () => <Modal />);
stroy.add('three text blocks', () => <ThreeTextBlocks />);