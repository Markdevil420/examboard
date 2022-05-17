import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {

  const router = useRouter();

  useEffect( () => {
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  },[]);

  return (<>
    <Head>
      <title>ExamBoard</title>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="ExamBoard tutorial learn programming language " />
      <meta name="description" content="This is learning website help to learn new technology" />
    </Head>
    <div className="container brandbox text-center">
      <h1 className="fw-bold">ExamBoard</h1>
      <div className="progress w-50 mx-auto">
        <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </>)
}
