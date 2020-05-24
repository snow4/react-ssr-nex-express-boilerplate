import Link from "next/link";
import Head from "next/head";

export default ({ children, title }) => (
  <div>
    <Head>
      <title>Demo ssr</title>
    </Head>
    <header>Header</header>
    <h1>{title}</h1>
    {children}
    <footer>Footer</footer>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
  </div>
);
