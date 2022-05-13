import PostItem from '../components/postitem';

export default function PostList(props) {

  return (
    <ul className="list-group">
      {
       props?.postlist?.map((postItem) => {
            return(
              <PostItem key={postItem.id} postItem={postItem}/>
            )                          
        })
      }
    </ul>
  )
}