import { Meta, Story } from '@storybook/react';
import React from 'react';
import {CardComponent} from './Card';

const meta: Meta = {
  title: 'Atoms/Card',
  component: CardComponent
}

export default meta;

const Template= args => <CardComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'This is a sample',
  text: '  your text here',
  image: 'https://i.imgur.com/DkudWS1.jpg',
  altImage: 'Sample',
  hashtags: ['this', 'is', 'a', 'sample']
}

