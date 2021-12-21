import { useRouter } from 'next/router';



export default function ListItem(props) {

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
            <li onClick={() => gotoPost(props.list.id)}  className="list-group-item d-flex  cursorpointer justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.list.title}</div>
            </div>
            <span className="badge bg-primary my-auto p-2 rounded-pill">Read More&#8594;</span>
            </li>
        </>
    )
}