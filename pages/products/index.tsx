import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import prisma from '../../db';
import ItemCard from '../../components/item-card';

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.product.findMany();

  return {
    props: { products },
  };
};

export default function Products({ products }) {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <section className="body-font text-gray-600">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div className="p-4 w-full md:w-1/2 lg:w-1/4" key={product.id}>
              <ItemCard
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
