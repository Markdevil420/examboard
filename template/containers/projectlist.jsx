import ProjectItem from '../components/projectitem';

export default function ProjectList(props) {

    return (
        <>
            <div className="container accordion-flush accordionstyle">
                {
                    props?.categorylist?.map((projectlist) => {
                        return(
                            <ProjectItem  key={projectlist.id} projectlist={projectlist} />
                        )                          
                    })
                }
            </div>
        </>
    )
}