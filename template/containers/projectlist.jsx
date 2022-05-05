import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import ProjectItem from '../components/projectitem';

export default function ProjectList() {

    const router = useRouter();
    const project_id =router.query.project;
    const categorylist = useSelector(state => state?.projectReducer?.projectlist).find( e => e.project_id == project_id )?.categorylist;

    return (
        <>
            <div className="container accordion-flush accordionstyle">
                {
                    categorylist?.map((projectlist) => {
                        return(
                            <ProjectItem  key={projectlist.id} projectlist={projectlist} />
                        )                          
                    })
                }
            </div>
        </>
    )
}