import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from './../components/header';
import Footer from './../components/footer';
import Router from 'next/router';
import React ,{useState} from 'react';
import Loader from './../components/loader';

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

export default MyApp
