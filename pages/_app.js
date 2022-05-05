import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from './../template/components/header';
import Footer from './../template/components/footer';
import Router from 'next/router';
import React ,{useState} from 'react';
import Loader from './../template/components/loader';
import { wrapper } from './../redux/store';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  Router.onRouteChangeStart = () => {
    setLoading(prevState => {
      return true;
    });
  };
  
  Router.onRouteChangeComplete = () => {
    setLoading(prevState => {
      return false;
    });
  };

  return (
    <>
    <Header/>
    {loading ?<Loader/> :<></>}
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default wrapper.withRedux(MyApp);
