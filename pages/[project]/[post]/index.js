import Skeleton from 'react-loading-skeleton';
import dynamic from "next/dynamic";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { wrapper } from './../../../redux/store';
import { getPost } from './../../../redux/actions/postAction';
const PostRender = dynamic(() => import("../../../template/components/postrender"), {
  loading: () =><Skeleton count={20} />,
});


export default function Post() {

  const router = useRouter();
  const post_slug =router.query.post;
  const post = useSelector(state => state?.postReducer?.postlist).find( e => e.slug == post_slug );

  return (<>
    <Head>
      <title>{ post?.seo?.title || post?.title || "ExamBoard"}</title>
      <meta name="description" content={post?.seo?.description || post?.title || "ExamBoard" } />
      <meta name="keywords" content={post?.seo?.description +" | "+ post?.title || "ExamBoard" } />
      <meta name="name" content={post?.seo?.description +" | "+ post?.title || "ExamBoard" } />
    </Head>
    <div className='container'>
      <PostRender title={post?.title} content={post?.content} />
    </div>
  </>)
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const slug = context.query.post || "";
      const current_state = await store.getState();

      if(!(await current_state?.postReducer?.postlist?.find( e => e.slug == slug))){
        await store.dispatch(getPost(slug));
      }
      return {
        props: { },
      };
    }
);
