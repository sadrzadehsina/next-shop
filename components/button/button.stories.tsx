import React from 'react';

import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import TertiaryButton from './tertiary-button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
};

const PrimaryTemplate = (args) => <PrimaryButton {...args} />;
const SecondaryTemplate = (args) => <SecondaryButton {...args} />;
const TertiaryTemplate = (args) => <TertiaryButton {...args} />;

export const Primary = PrimaryTemplate.bind({});
Primary.args = {};

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {};

export const Tertiary = TertiaryTemplate.bind({});
Tertiary.args = {};

export const Disabled = PrimaryTemplate.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};
