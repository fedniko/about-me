import Head from 'next/head';

export default function MainLayout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=11" />
      </Head>
      <header>
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </>
  );
}
