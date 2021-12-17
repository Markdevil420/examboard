import { useRouter } from 'next/router';



export default function ListItem(props) {

    const router = useRouter();
    function gotoProject(){

        
        router.push('/' +props.list.project);
        if (router.isFallback) {
            return <div>Loading...</div>
        }
    }

    return (
        <>
            <li onClick={gotoProject}  className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.list.title}</div>
            </div>
            <span className="badge bg-primary my-auto p-2 rounded-pill cursorpointer">Read More&#8594;</span>
            </li>
        </>
    )
  }