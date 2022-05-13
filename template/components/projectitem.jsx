import { useRouter } from 'next/router';

export default function ProjectItem(props) {

    const router = useRouter();
    function gotoProject(){
        router.push('/' +props.projectlist.slug);
    }

    return (
        <>
            <button onClick={gotoProject}  className="btn-primary my-1 ps-4 w-100 btn-block buttontext">
                {props.projectlist.title}
            </button>
        </>
    )
}