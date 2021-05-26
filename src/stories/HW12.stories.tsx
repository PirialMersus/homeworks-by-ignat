import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import HW12 from "../p2-homeworks/h12/HW12";
import store from "../p2-homeworks/h10/bll/store";
import {Provider} from "react-redux";

export default {
  title: 'TodoList/HW12',
  component: HW12,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Provider store={store}><HW12 {...args} /></Provider>;

export const Primary = Template.bind({});
Primary.args = {
};

