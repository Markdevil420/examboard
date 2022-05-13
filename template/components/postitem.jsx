import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';

export default function PostItem(props) {

    const router = useRouter();
    function gotoPost(slug){
        const {project} = router.query
        if (router.isFallback) {
            return <div>Loading...</div>
        }
        router.push('/'+project+"/"+slug);
    }

    return (
        <>
            <li onClick={() => gotoPost(props.postItem.slug)}  className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{ ReactHtmlParser(props.postItem.title)}</div>
                </div>
                <span className="badge bg-primary my-auto p-2 rounded-pill cursorpointer">Read More&#8594;</span>
            </li>
        </>
    )
}