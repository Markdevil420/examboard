import React from 'react';
import List from '../components/container/list';

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
      <List list={Project_List}/>
    </div>
  )
}
