import { AppProps } from 'next/app';
import { Roboto_Mono, Space_Mono } from 'next/font/google';

import 'app/styles/index.scss';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '400'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${robotoMono.style.fontFamily};
        }

        .grotesk {
          font-family: ${spaceMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
