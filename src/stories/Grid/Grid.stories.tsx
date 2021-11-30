import { Meta } from '@storybook/react';
import {GridComponent} from './Grid';

const meta: Meta = {
  title: 'Atoms/Grid',
  component: GridComponent
}

export default meta;

const Template= () => <GridComponent />;

export const Default = Template.bind({});
