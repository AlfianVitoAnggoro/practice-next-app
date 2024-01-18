import { getData } from '@/services/products';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Modal = dynamic(() => import('@/components/core/Modal'));

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`,
  );

  return (
    <Modal>
      <Image
        src={product.data.image}
        alt={product.data.name}
        className="w-full object-cover aspect-square col-span-2"
        width={500}
        height={500}
        priority
      />
      <div className="bg-white p-4 px-6">
        <h3 className="text-2xl text-black">{product.data.name}</h3>
        <p className="text-black">${product.data.price}</p>
      </div>
    </Modal>
  );
}
