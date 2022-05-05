import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import PostItem from '../components/postitem';

export default function PostList() {

  const router = useRouter();
  const project_id =router.query.project;
  const postlist = useSelector(state => state?.projectReducer?.projectlist).find( e => e.project_id == project_id )?.postlist;

  return (
    <ul className="list-group">
      {
       postlist?.map((postItem) => {
            return(
              <PostItem key={postItem.id} postItem={postItem}/>
            )                          
        })
      }
    </ul>
  )
}