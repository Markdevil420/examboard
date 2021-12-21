//import AccordionList from './../../components/container/accordionlist';
import Skeleton from 'react-loading-skeleton';
import dynamic from "next/dynamic";

const AccordionList = dynamic(() => import("./../../components/container/accordionlist"), {
  loading: () =><Skeleton count={20} />,
});

export default function Project(props) {
  return (
    <div className='container mt-3 mb-3'>
      <AccordionList projectex={props.Accordian_data}/>
    </div>
  )
}

export async function getStaticPaths() {
  return { paths:[], fallback: 'blocking' }
}


export async function getStaticProps({ params }) {

  const res = await fetch(`https://www.secova.com/wp-json/wp/v2/categories`);
  const user = await res.json();
  const Accordian_data1 = user.map( (u) => {

    return {id:u.id,title:u.name};

  })

  return { 
    props: { 
      Accordian_data:Accordian_data1
    } 
  }
}
