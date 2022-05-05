import Skeleton from 'react-loading-skeleton';
import dynamic from "next/dynamic";
import { wrapper } from './../../../redux/store';
import { getPost } from './../../../redux/actions/postAction';
const PostRender = dynamic(() => import("../../../template/components/postrender"), {
  loading: () =><Skeleton count={20} />,
});

export default function Post() {
  return (
    <div className='container'>
        <PostRender/>
    </div>
  )
}

// export async function getStaticPaths() {
//   return { paths:[], fallback: 'blocking' }
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const id = context.query.post | 0;
      const current_state = await store.getState();
      if(!(await current_state?.postReducer?.postlist?.find( e => e.id == id))){
        await store.dispatch(getPost(id));
      }
      return {
        props: { },
      };
    }
);
