import { LOAD_POST, LOAD_POST_SUCCESS , LOAD_POST_FAIL ,CLEAR_POST_ERROR } from './../constants/postConstants';

const initialState = {
    loaded: false,
    loading: false,
    error: false,
    // errorMessage : null,
    postlist:[],
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_POST:
        return{
            ...state, 
            loading: true
        };

        case LOAD_POST_SUCCESS:{

            // const {id = null, title = null, content = null } = action.payload;
            // const post = {project_id:project_id , categorylist:categorylist,postlist:postlist};
            
            if(!(state.postlist.find( e => e.slug == action.payload.slug))){
                state.postlist.push(action.payload);
            }
            
            return{
                ...state,
                loaded: true,
                loading: false,
                error: false,
                //errorMessage : null,
                //projectlist:projectlist
            };
        }

        case LOAD_POST_FAIL:            
        return{
            ...state,
            error: true,
            loading: false,
           // errorMessage:action.payload.data
        };

        case CLEAR_POST_ERROR:            
        return{
            ...state,
            error: false,
         //   errorMessage:null
        };
            
        default:
        return{
            ...state
        };
    }
}