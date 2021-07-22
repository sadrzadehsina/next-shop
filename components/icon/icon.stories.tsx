import React from 'react';

import Icon from './icon';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Icon',
};

const Template = (args) => (
  <Icon {...args} className="w-10 h-10 text-blue-500" />
);

export const NamedIcon = Template.bind({});
NamedIcon.args = {
  name: 'annotation',
};
