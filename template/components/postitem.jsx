import { useRouter } from 'next/router';

export default function PostItem(props) {

    const router = useRouter();
    function gotoPost(id){
        const {project} = router.query
        if (router.isFallback) {
            return <div>Loading...</div>
        }
        router.push('/'+project+"/"+id);
    }

    return (
        <>
            <li onClick={() => gotoPost(props.postItem.id)}  className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.postItem.title}</div>
                </div>
                <span className="badge bg-primary my-auto p-2 rounded-pill cursorpointer">Read More&#8594;</span>
            </li>
        </>
    )
}