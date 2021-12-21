import ReactHtmlParser from 'react-html-parser';
 

export default function Project(props) {
  return (
    <div className='container'>
        {
          props.post_data.map( (d) => {
           return( <> 
            <h1>{d.title}</h1>
            <div>{ ReactHtmlParser(d.content) }</div>
            </>);
          })
        }
    </div>
  )
}

export async function getStaticPaths() {
  return { paths:[], fallback: 'blocking' }
}


export async function getStaticProps({ params }) {

  const res = await fetch(`https://www.secova.com/wp-json/wp/v2/posts/?include[]=${params.post}`);
  const user = await res.json();

  const post_data = user.map( (u) => {

    return {id:u.id,title:u.title.rendered,content:u.content.rendered};

  })
  //console.log("post_data"+JSON.stringify(post_data));
  return { 
    props: { 
      post_data:post_data
    } 
  }
}
