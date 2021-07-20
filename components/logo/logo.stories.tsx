import React from 'react';

import Logo from './logo';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Logo',
};

const Template = (args) => <Logo {...args} />;

export const HeaderLogo = Template.bind({});
HeaderLogo.args = {};
