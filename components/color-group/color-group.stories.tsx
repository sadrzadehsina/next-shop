import React from 'react';

import ColorGroup from './color-group';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Color Group',
};

export const Default = () => {
  return (
    <ColorGroup
      colors={['red', 'green', 'blue', 'white', 'black', 'purple', 'yellow']}
    />
  );
};
