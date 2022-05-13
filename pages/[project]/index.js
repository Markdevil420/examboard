import Skeleton from 'react-loading-skeleton';
import dynamic from "next/dynamic";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { wrapper } from './../../redux/store';
import { getProject } from './../../redux/actions/projectAction';

const ProjectList = dynamic(() => import("./../../template/containers/projectlist"), {
  loading: () =><Skeleton count={20} />,
});

const PostList = dynamic(() => import("./../../template/containers/postlist"), {
  loading: () =><Skeleton count={20} />,
});

export default function Project() {

  const router = useRouter();
  const project_slug =router.query.project;
  const project = useSelector(state => state?.projectReducer?.projectlist).find( e => e.slug == project_slug );
  const categorylist = project?.categorylist;
  const postlist = project?.postlist;
  const projectseo = project?.seo;


  return (<>
    <Head>
      <title>{ projectseo?.title || project_slug ||  "Examboard"}</title>
      <meta name="description" content={projectseo?.description ||  project_slug +" | "+  "ExamBoard"} />
      <meta name="keywords" content={projectseo?.description || project_slug +" | "+  "ExamBoard" } />
      <meta name="name" content={projectseo?.description || project_slug +" | "+  "ExamBoard" } />
    </Head>
    <div className='container mt-3 mb-3'>
      {
        (categorylist?.length || postlist?.length)
        ?
        <>
          <ProjectList categorylist={categorylist} />
          <PostList postlist={postlist} />
        </>
        :
        <>
          <h2 className='text-danger text-center place-center'>Content not found. Please try after sometime.</h2>
        </>
      }
    </div>
  </>)
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const slug = context.query.project;
      const current_state = await store.getState();

      if(!await current_state?.projectReducer?.projectlist?.find( e => e.slug == slug)){
        await store.dispatch(getProject(slug));
      }
      return {
        props: { },
      };
    }
);

