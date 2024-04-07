import Image from 'next/image';
import loginRequest from '@/app/api/loginRequest';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    loginRequest();
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} flex bg-white rounded-lg shadow border md:mt-0 xl:p-0 mr-3`}
      >
        <div
          className={`${styles.content} p-6 space-y-4 md:space-y-6 sm:p-8 flex-1`}
        >
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <div className="flex justify-between">
            <h1>This is WhiskyCommunity</h1>
            <Image
              className={`${styles.image} flex sm:max-w-md rounded-lg shadow border md:mt-0 xl:p-0`}
              src="/images/loginImage.png"
              width={500}
              height={500}
              alt="LoginImage"
            />
          </div>
          <button
            className={`${styles.button} w-full text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
