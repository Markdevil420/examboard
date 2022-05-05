import Skeleton from 'react-loading-skeleton';
import dynamic from "next/dynamic";
import { wrapper } from './../../redux/store';
import { getProject } from './../../redux/actions/projectAction';

const ProjectList = dynamic(() => import("./../../template/containers/projectlist"), {
  loading: () =><Skeleton count={20} />,
});

const PostList = dynamic(() => import("./../../template/containers/postlist"), {
  loading: () =><Skeleton count={20} />,
});

export default function Project() {
  return (
    <div className='container mt-3 mb-3'>
      <ProjectList/>
      <PostList/>
    </div>
  )
}

// export async function getStaticPaths() {
//   return { paths:[], fallback: 'blocking' }
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const id = context.query.project | 0;
      const current_state = await store.getState();
      if(!(await current_state?.projectReducer?.projectlist?.find( e => e.project_id == id))){
        await store.dispatch(getProject(id));
      }
      return {
        props: { },
      };
    }
);

