import { LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS , LOAD_PROJECTS_FAIL ,CLEAR_PROJECTS_ERROR } from './../constants/projectConstants';
import  axios  from 'axios';

export const getProject =  (slug="home") => async(dispatch) => {

    try {
        
        dispatch({
            type:LOAD_PROJECTS,
        });
        
        const list = await axios.post(`${process.env.BASE_URL}/api/getdata`,{
            "slug":slug,
            "type":1
        });
        
        // const list = await axios.post(`${process.env.API_BASE_URL}webapi.php`,{
        //     "slug":slug,
        //     "type":1
        // });
        
        console.log("List api response :- ",list?.headers?.date+"=="+slug);

        if(list.data.status_code == 200){

            const id = await list?.data?.data?.id;

            const postList = await list?.data?.data?.postlist?.map((e) => {
                return { id: e.id,title:e.title,slug:e.slug}
            });

            const categoryList = await list?.data?.data?.categorylist?.map((e) => {
                return { id: e.id,title:e.title,slug:e.slug}
            });

            const seo = await list?.data?.data?.seo || null;
    
            const projectList = {
                id:id,
                slug:slug,
                postlist:postList,
                categorylist:categoryList,
                seo:seo,
            }
     
            dispatch({
                type:LOAD_PROJECTS_SUCCESS,
                payload:projectList,
            });
    
        }else{
            dispatch({
                type:LOAD_PROJECTS_FAIL,
                //payload: "Fails"
            });
        }

    } catch (error) {
        console.log("error",error);
        dispatch({
            type:LOAD_PROJECTS_FAIL,
            //payload: "Fails"
        });
    }

}

export const clearProjectError = () => async(dispatch) => {
    dispatch({
        type:CLEAR_PROJECTS_ERROR,
    });
}