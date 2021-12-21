import  List from './container/list';
import React ,{useState} from 'react';
import Skeleton from 'react-loading-skeleton';

// List_data = [
//     {
//       id:1,
//       title:"secdfdgova",
//     },
//     {
//       id:2,
//       title:"Tmpwdfbfdirect",
//     },
//     {
//       id:3,
//       title:"Bifbfzq",
//     },
    
//   ];
export default function AccordionItem(props) {

  const [List_data, setList_data] = useState([]);
  const [error, setError] = useState(false);
  const [res, setRes] = useState(false);

  const getpostList=async(id)=>{
    if(!List_data.length){

      await fetch(`https://www.secova.com/wp-json/wp/v2/posts?_embed=1&per_page=100&offset=0&categories=${id}`)
      .then( async (response) => { 
        const responsedata = await response.json();
        const result = responsedata.map( (data) => {
          return {id:data.id,title:data.title.rendered};
        })
        setList_data(prevState => {
          return result;
        });
        setRes(pState => {
          return true;
        });
      })
      .catch((err) => {
        console.log("err"+err);
        setError(pState => {
          return true;
        });
        setRes(pState => {
          return true;
        });
      });

      // const res = await fetch(`https://www.secova.com/wp-json/wp/v2/posts?_embed=1&per_page=100&offset=0&categories=${id}`);
      // const data = await res.json();

      // const result = data.map( (data) => {
      //   return {id:data.id,title:data.title.rendered};
      // })
      // setList_data(prevState => {
      //   return result;
      // });
    }
  }

  return (
    <>
      <div className="accordion-item">       
        <h2 className="accordion-header" id={"heading"+props.list.id}>
        <button onClick={() => getpostList(props.list.id)} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+props.list.id} aria-expanded="false" aria-controls={"flush-collapse"+props.list.id}>
          {props.list.title}
        </button>
        </h2>
        <div id={"flush-collapse"+props.list.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading"+props.list.id} data-bs-parent="#accordionFlushExample">
        {/* <div className="accordion-body"><List list={props.list.id}/></div> */}
          <div className="accordion-body"> {res? error ? <h3 className="text-center text-danger">Somethings Wents Wrong Plese try again !</h3> : List_data.length ? <List list={List_data}/> :<h3 className="text-center text-danger">Data Not Found !</h3> :<Skeleton count={10} />}</div>
        </div>
      </div>
    </>
  )
}

// export async function getStaticProps({ params }) {

//   const res = await fetch(`https://bizq.sbf.org.sg/wp-json/wp/v2/categories`);
//   const user = await res.json();
//   const data1 = user.map( (u) => {

//     return {id:u.id,title:u.name};

//   })

//   return { 
//     props: { 
//       data:data1
//     } 
//   }
// }