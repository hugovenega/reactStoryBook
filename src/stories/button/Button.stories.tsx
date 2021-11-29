import { Meta, Story } from '@storybook/react';
import React from 'react';
import ButtonComponent from './Button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: ButtonComponent,
}

export default meta;

const Template: Story = ButtonComponent();

export const Default = Template.bind({});
