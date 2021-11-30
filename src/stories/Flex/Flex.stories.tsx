import { Meta } from '@storybook/react';
import {FlexComponent} from './Flex';

const meta: Meta = {
  title: 'Atoms/Flex',
  component: FlexComponent
}

export default meta;

const Template= () => <FlexComponent />;

export const Default = Template.bind({});
