import Image from 'next/image';
import { Card, Button, Truncate } from 'react-component-library';
import Price from '../price';

const Header = ({ image }) => (
  <Image
    className="block w-full h-full object-cover object-top"
    width="400"
    height="400"
    src={image}
    alt="Product Image"
  />
);

const Body = ({ name, price, description }) => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-2xl">{name}</h1>
        <h6 className="text-lg">
          <Price value={price} />
        </h6>
      </div>
      <Truncate>
        <p>{description}</p>
      </Truncate>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-right">
      <Button type="success">Buy Me</Button>
    </div>
  );
};

const ItemCard = ({ image, name, price, description }) => {
  return (
    <div style={{ width: '400px' }}>
      <Card
        renderHeader={() => <Header image={image} />}
        renderBody={() => (
          <Body name={name} price={price} description={description} />
        )}
        renderFooter={() => <Footer />}
      />
    </div>
  );
};

export default ItemCard;
