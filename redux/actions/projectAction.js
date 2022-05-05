import { LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS , LOAD_PROJECTS_FAIL ,CLEAR_PROJECTS_ERROR } from './../constants/projectConstants';
import  axios  from 'axios';

export const getProject =  (id=0) => async(dispatch) => {

    try {

        dispatch({
            type:LOAD_PROJECTS,
        });

        const list = await axios.post('http://localhost/examboard/api/getData.php',{
            "id":id,
            "type":1
        });

        console.log("List api response :- ",list?.headers?.date);

        if(list.data.status_code == 200){

            const postList = await list?.data?.data?.postlist?.map((e) => {
                return { id: e.id,title:e.title}
            });

            const categoryList = await list?.data?.data?.categorylist?.map((e) => {
                return { id: e.id,title:e.title}
            });
    
            const projectList = {
                postlist:postList,
                categorylist:categoryList,
                project_id:id
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