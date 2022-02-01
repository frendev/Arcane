import "../styles/globals.scss";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  // console.log(Component, pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
