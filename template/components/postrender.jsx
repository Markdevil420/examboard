import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function PostRender(props) {

    const router = useRouter();
    const post_id =router.query.post;
    const post = useSelector(state => state?.postReducer?.postlist).find( e => e.id == post_id );

    return (<>
        <h1>{post.title}</h1>
        <hr/>
        <div className='postdiv'>{ ReactHtmlParser(post.content) }</div>
    </>)
}