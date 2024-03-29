import {Header, Footer} from '@/components/index';
import '../styles/globals.css';

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <body className="bg-gray-100 min-h-screen font-sans text-gray-900">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
