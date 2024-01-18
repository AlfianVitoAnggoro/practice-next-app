import { NextResponse } from '../node_modules/next/server';
import type { NextRequest } from '../node_modules/next/server';
import withAuth from './middlewares/withAuth';

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  '/dashboard',
  '/profile',
  '/login',
  '/register',
]);
