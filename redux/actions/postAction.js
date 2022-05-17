import { LOAD_POST, LOAD_POST_SUCCESS , LOAD_POST_FAIL ,CLEAR_POST_ERROR } from './../constants/postConstants';
import  axios  from 'axios';

export const getPost =  (slug="") => async(dispatch) => {

    try {

        dispatch({
            type:LOAD_POST,
        });

        const post = await axios.post(`${process.env.BASE_URL}/api/getdata`,{
            "slug":slug,
            "type":2
        });

        // const post = await axios.post(`${process.env.API_BASE_URL}webapi.php`,{
        //     "slug":slug,
        //     "type":2
        // });

        console.log("post api response :- ",post?.headers?.date+"=="+slug);

        if(post.data.status_code == 200){
    
            const postdata = {
                id:post?.data?.data?.id,
                slug:post?.data?.data?.slug,
                title:post?.data?.data?.title,
                seo:post?.data?.data?.seo,
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