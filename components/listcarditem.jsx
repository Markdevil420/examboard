import { useRouter } from 'next/router';



export default function ListCardItem(props) {

    const router = useRouter();
    function gotoProject(){
        router.push('/' +props.list.project);
    }

    return (
        <>
            <li onClick={gotoProject}  className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.list.title}</div>
            </div>
            </li>
        </>
    )
  }