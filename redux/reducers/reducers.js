import { combineReducers  } from "redux";
import { projectReducer } from './projectReducer';
import { postReducer } from './postReducer';

const reducer = combineReducers({
    projectReducer:projectReducer,
    postReducer:postReducer
});

export default reducer;