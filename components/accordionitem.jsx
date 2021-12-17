import  List from './container/list';

const List_data = [
    {
      id:1,
      title:"secdfdgova",
    },
    {
      id:2,
      title:"Tmpwdfbfdirect",
    },
    {
      id:3,
      title:"Bifbfzq",
    },
    
  ];
export default function AccordionItem(props) {
    return (
        <>
        <div className="accordion-item">       
            <h2 className="accordion-header" id={"heading"+props.list.id}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+props.list.id} aria-expanded="false" aria-controls={"flush-collapse"+props.list.id}>
                {props.list.title}
            </button>
            </h2>
            <div id={"flush-collapse"+props.list.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading"+props.list.id} data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"> <List list={List_data}/></div>
            </div>
        </div>
        </>
    )
  }