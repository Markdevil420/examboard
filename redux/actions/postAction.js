import { LOAD_POST, LOAD_POST_SUCCESS , LOAD_POST_FAIL ,CLEAR_POST_ERROR } from './../constants/postConstants';
import  axios  from 'axios';

export const getPost =  (id=0) => async(dispatch) => {

    try {

        dispatch({
            type:LOAD_POST,
        });

        const post = await axios.post('http://localhost/examboard/api/getData.php',{
            "id":id,
            "type":2
        });

        console.log("post api response :- ",post?.headers?.date);

        if(post.data.status_code == 200){
    
            const postdata = {
                id:post?.data?.data?.id,
                title:post?.data?.data?.title,
                content:post?.data?.data?.content
            }
     
            dispatch({
                type:LOAD_POST_SUCCESS,
                payload:postdata,
            });
    
        }else{
            dispatch({
                type:LOAD_POST_FAIL,
                //payload: "Fails"
            });
        }

    } catch (error) {
        console.log("error",error);
        dispatch({
            type:LOAD_POST_FAIL,
            //payload: "Fails"
        });
    }

}

export const clearProjectError = () => async(dispatch) => {
    dispatch({
        type:CLEAR_POST_ERROR,
    });
}