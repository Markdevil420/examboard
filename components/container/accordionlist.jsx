import AccordionItem from './../accordionitem';

export default function AccordionList(props) {
    return (
        <>
            <div className="accordion accordion-flush accordionstyle" id="accordionFlushExample">
                {
                    props.projectex.map((projectlist) => {
                        return(
                            <AccordionItem list={projectlist} key={projectlist.id}/>
                        )                          
                    })
                }
            </div>
        </>
    )
}