import React from 'react';

import Price from './price';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Price',
  component: Price,
};

export const Default = () => {
  return <Price value="1000000000" />;
};
