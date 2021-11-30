import { Meta, Story } from '@storybook/react';
import React from 'react';
import {AlertComponent, AlertComponentProps, TypeAlert} from './Alert';

const meta: Meta = {
  title: 'Atoms/Alert',
  component: AlertComponent
}

export default meta;

const Template= args => <AlertComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'This is a sample',
   message: '  your message here',
    type: TypeAlert.MESSAGE 
}

