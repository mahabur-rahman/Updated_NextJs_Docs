// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// header scss
import "../styles/header.scss";
import "../styles/home.scss";
import "../styles/services.scss";
// global scss
import "../styles/globals.scss";
// component
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
