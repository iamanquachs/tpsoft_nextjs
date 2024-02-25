import 'bootstrap/dist/css/bootstrap.min.css';
import "@/scss/_reboot.scss";
import "@/scss/index.scss";
import "@/scss/responsive.scss";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
