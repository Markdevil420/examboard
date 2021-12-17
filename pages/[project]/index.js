//import AccordionList from './../../components/container/accordionlist';

import dynamic from "next/dynamic";

const AccordionList = dynamic(() => import("./../../components/container/accordionlist"), {
  loading: () => <b>Loading...</b>,
});


const Accordian_data = [
  {
    id:1,
    title:"Secova",
    baseurl:"https://secova.com/"
  },
  {
    id:2,
    title:"Tmpwdirect",
    baseurl:"https://www.tmpwdirect.com/"
  },
  {
    id:3,
    title:"Bizq",
    baseurl:"https://bizq.sbf.org.sg/"
  },
  
];


export default function Project(props) {

  

  return (
    <div className='container mt-3 mb-3'>
      <AccordionList projectex={Accordian_data}/>
    </div>
  )
}

export async function getStaticPaths() {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //const users = await res.json()
  const users = [
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
  ]

  const paths = users.map((props) => ({
    params: { project: props.title.toString()},
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  // const res = await fetch(`${params.baseurl}wp-json/wp/v2/categories`)
  console.log("params.baseurl"+JSON.stringify(params));
  // const res = await fetch(`https://www.tmpwdirect.com/wp-json/wp/v2/categories`)
  // const user = await res.json()

  return { props: { Accordian_data:Accordian_data } }
}

// export async function getStaticProps(){

//   return {
//     props : {
//       Accordian_data:Accordian_data
//     }
//   }
// }