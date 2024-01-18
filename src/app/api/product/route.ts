import { retrieveData, retrieveDataById } from '@/lib/firebase/service';
import {
  NextRequest,
  NextResponse,
} from '../../../../node_modules/next/server';
const data = [
  {
    id: 1,
    title: 'New Shoes',
    price: 100000,
    image:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    title: 'Old Shoes',
    price: 200000,
    image:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    title: 'Old Shoes',
    price: 200000,
    image:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 4,
    title: 'Old Shoes',
    price: 200000,
    image:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const detailProduct = await retrieveDataById('products', id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: 'Success',
        data: detailProduct,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: 'Not Found',
        data: {},
      });
    }
  }

  const products = await retrieveData('products');
  return NextResponse.json({ status: 200, message: 'Success', data: products });
}
