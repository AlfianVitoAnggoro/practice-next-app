'use client';
import Link from '../../../../node_modules/next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function Login({ searchParams }: any) {
  const { push } = useRouter();
  const [error, setErorr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const callbackUrl = searchParams.callbackUrl || '/';

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setErorr('');
    setIsLoading(true);
    try {
      const res: any = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        if (res.status === 401) {
          setErorr('Email or Password is incorrect');
        }
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {error !== '' && (
        <div className="text-red-600 font-bold mb-3">{error}</div>
      )}
      <div className="bg-white shadow-md border w-96 border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={e => handleLogin(e)}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? 'Loading...' : 'Login to your account'}
          </button>
          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl, redirect: false })}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login With Google
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{' '}
            <Link
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}