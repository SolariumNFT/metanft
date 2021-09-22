import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Solarium NFT Store</title>
      </Head>
      <div id="root" 
        style={{backgroundImage: "url(/moonbackgroundblue.png)",
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover'}} >
        
        <Component {...pageProps} />
      </div>
    </>
  );
}
