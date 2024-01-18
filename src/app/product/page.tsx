'use client';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
// import { getData } from '@/services/products';

type ProductPageProps = {
  params: {
    slug: string[];
  };
};
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`,
    fetcher,
  );
  // const products = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product`,
  // );

  const products = {
    data: data?.data,
  };
  return (
    <div>
      <h1 className="text-3xl text-white text-center">
        {params.slug ? 'Detail Product Pages' : 'Product Pages'}
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.data?.length > 0 &&
          products.data?.map((product: any) => {
            return (
              <Link
                href={`${process.env.NEXT_PUBLIC_API_URL}/product/detail/${product.id}`}
                key={product.id}
                className="w-11/12 bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 "
              >
                <Image
                  className="rounded-t-lg p-8 object-cover h-96 w-full"
                  src={product.image}
                  alt="product image"
                  width={500}
                  height={500}
                  priority
                />
                <div className="px-5 pb-5">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white truncate">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mt-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {params.slug && (
        <ul>
          <li>
            <h2>Detail Pages : {params.slug[0]}</h2>
          </li>
          <li>
            <h2>Gender : {params.slug[1]}</h2>
          </li>
          <li>
            <h2>Id : {params.slug[2]}</h2>
          </li>
        </ul>
      )}
    </div>
  );
}
