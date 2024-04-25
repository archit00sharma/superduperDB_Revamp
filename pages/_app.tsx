import { AppProps } from 'next/app';
import { Roboto_Mono, Space_Grotesk } from 'next/font/google';

import 'app/styles/index.scss';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${robotoMono.style.fontFamily};
        }

        .grotesk {
          font-family: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
