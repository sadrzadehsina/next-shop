import { FC, HTMLAttributes, HTMLDivElement } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: array;
}

const ShoppingCart: FC<Props> = ({ items = [] }) => {
  return (
    <div className="p-4 bg-gray-100">
      {items.map((item) => (
        <div key={item.id}>
          <img
            className="block float-left px-2 w-24 h-24 object-cover object-top"
            src={item.image}
            alt="product image"
          />
          <h1>{item.name}</h1>
          <h2>
            {item.price} - {item.size}
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
