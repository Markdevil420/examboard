import ListItem from "../listitem";
//import useRouter from 'next/router';

export default function List(props) {

  // const router = useRouter();
  // function gotoProject(linkaddress){
  //   router.push('/'+linkaddress);
  // }

  return (
    <ol className="list-group list-group-numbered">
      {
        props.list.map((list) => {
            return(
              <ListItem list={list} key={list.id}/>
            )                          
        })
      }
    </ol>
  )
}