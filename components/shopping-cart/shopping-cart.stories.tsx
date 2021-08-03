import React from 'react';

import ShoppingCart from './shopping-cart';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ShoppingCart',
};

const Template = (args) => <ShoppingCart {...args} />;

export const WithItems = Template.bind({});
WithItems.args = {
  items: [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      name: 'Product 1',
      price: '100',
      size: 'lg',
      description:
        'Cillum proident non officia quis sunt et adipisicing culpa ad cillum ut ipsum officia. Ipsum irure anim incididunt quis fugiat quis tempor velit aliqua ea cupidatat dolor. Cillum adipisicing ullamco velit nulla consequat duis excepteur dolore mollit excepteur anim. Deserunt do mollit enim proident enim nisi cupidatat laborum deserunt. Elit do aliquip excepteur voluptate mollit ipsum excepteur ipsum excepteur consequat dolor eiusmod sunt. Magna magna quis veniam do reprehenderit commodo voluptate. Aute velit ipsum eu occaecat dolore cillum ullamco labore.',
    },
  ],
};
