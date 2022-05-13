import { LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS , LOAD_PROJECTS_FAIL ,CLEAR_PROJECTS_ERROR } from './../constants/projectConstants';

const initialState = {
    loaded: false,
    loading: false,
    error: false,
    // errorMessage : null,
    projectlist:[],
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_PROJECTS:
        return{
            ...state, 
            loading: true
        };

        case LOAD_PROJECTS_SUCCESS:{

            const {id , slug , postlist = [], categorylist = [] , seo } = action.payload;
            const list = {id:id ,slug:slug , categorylist:categorylist,postlist:postlist , seo:seo};
            
            if(!(state.projectlist.find( e => e.slug == slug))){
                state.projectlist.push(list);
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

        case LOAD_PROJECTS_FAIL:            
        return{
            ...state,
            error: true,
            loading: false,
           // errorMessage:action.payload.data
        };

        case CLEAR_PROJECTS_ERROR:            
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