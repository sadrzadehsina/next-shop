import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import prisma from '../../db';

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
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-24">
          <div class="flex flex-wrap -m-4">
            {products.map((product) => (
              <div class="p-4 w-full md:w-1/2 lg:w-1/4">
                <Link
                  href={`/products/${product.id}`}
                  class="relative block h-96 rounded overflow-hidden"
                >
                  <a>
                    <Image
                      class="block w-full h-full object-cover object-top"
                      width="400"
                      height="400"
                      src={product.image}
                    />
                    <div class="mt-4">
                      <h2 class="title-font text-gray-900 text-lg font-medium">
                        {product.name}
                      </h2>
                      <p class="mt-1">${product.price}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
