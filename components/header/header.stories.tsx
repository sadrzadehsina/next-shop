import React from 'react';

import Header from './header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Header',
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {};
