import Image from 'next/image';
import { Card, Button } from 'react-component-library';

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
        <h6 className="text-lg">{price}</h6>
      </div>
      <p>{description}</p>
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
    <Card
      renderHeader={() => <Header image={image} />}
      renderBody={() => (
        <Body name={name} price={price} description={description} />
      )}
      renderFooter={() => <Footer />}
    />
  );
};

export default ItemCard;
