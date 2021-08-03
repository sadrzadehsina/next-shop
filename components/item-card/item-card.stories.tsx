import React from 'react';
import ItemCard from './item-card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ItemCard',
};
export const Main = () => {
  return (
    <ItemCard
      image="https://placeimg.com/640/480/any"
      title="Product 1"
      price="120$"
      description="Fugiat sit sint ut nostrud esse deserunt ad incididunt exercitation
	ullamco consequat. Dolor culpa dolor amet occaecat anim et culpa
	adipisicing veniam ullamco eu Lorem aute. Exercitation est ut nulla quis
	laboris occaecat elit laborum sit officia magna tempor ipsum
	reprehenderit"
    />
  );
};
