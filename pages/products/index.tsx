import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getStaticProps() {
  const products = await prisma.product.findMany();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map((product) => (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={`/products/${product.id}`}
                  class="block relative h-96 rounded overflow-hidden"
                >
                  <Image
                    class="object-cover object-top w-full h-full block"
                    width="400"
                    height="400"
                    src={product.image}
                  />
                </Link>
                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p class="mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
