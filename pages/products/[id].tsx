import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return {
    props: { product },
  };
};

export default function Product({ product }) {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <section class="body-font text-gray-600 overflow-hidden">
        <div class="container mx-auto px-5 py-24">
          <div class="flex flex-wrap mx-auto lg:w-4/5">
            <Image
              alt="ecommerce"
              class="w-full h-64 rounded object-cover object-top lg:w-1/2 lg:h-auto"
              width="400"
              height="400"
              src={product.image}
            />
            <div class="mt-6 w-full lg:mt-0 lg:pl-10 lg:py-6 lg:w-1/2">
              <h2 class="title-font text-gray-500 text-sm tracking-widest">
                BRAND NAME
              </h2>
              <h1 class="title-font mb-1 text-gray-900 text-3xl font-medium">
                {product.name}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="ml-3 text-gray-600">4 Reviews</span>
                </span>
                <span class="space-x-2s flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">{product.description}</p>
              <div class="flex items-center mb-5 mt-6 pb-5 border-b-2 border-gray-100">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                  <button class="ml-1 w-6 h-6 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                  <button class="ml-1 w-6 h-6 bg-indigo-500 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                </div>
                <div class="flex items-center ml-6">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="pl-3 pr-10 py-2 text-base border border-gray-300 focus:border-indigo-500 rounded focus:outline-none appearance-none focus:ring-2 focus:ring-indigo-200">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font text-gray-900 text-2xl font-medium">
                  ${product.price}
                </span>
                <button class="flex ml-auto px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 border-0 rounded focus:outline-none">
                  Button
                </button>
                <button class="inline-flex items-center justify-center ml-4 p-0 w-10 h-10 text-gray-500 bg-gray-200 border-0 rounded-full">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
