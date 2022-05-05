import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  setTimeout(() => {
    router.push('/0');
  }, 3000);

  return (<>
    <div className="container brandbox text-center">
      <h1 className="fw-bold">ExamBoard</h1>
      <div className="progress w-50 mx-auto">
        <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </>)
}
