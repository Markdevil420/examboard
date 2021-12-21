import React from 'react';
import ListCardItem from '../components/listcarditem';

const Project_List = [
  {
    id:1,
    title:"Secova",
    baseurl:"https://secova.com/",
    project:"Secova",
  },
  {
    id:2,
    title:"Tmpwdirect",
    baseurl:"https://www.tmpwdirect.com/",
    project:"Tmpwdirect",
  },
  {
    id:3,
    title:"Bizq",
    baseurl:"https://bizq.sbf.org.sg/",
    project:"Bizq",
  },
  
];

export default function Home(props) {
  return (
    <div className='container mt-3 mb-3'>
      <ol className="list-group list-group-numbered">
      {
        Project_List.map((list) => {
          return(
            <ListCardItem list={list} key={list.id}/>
          )                          
        })
      }
      </ol>
    </div>
  )
}
