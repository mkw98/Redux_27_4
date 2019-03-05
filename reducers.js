import { combineReducers } from 'redux';
import comments from './comments';

const initialState = {
    comments: [],
    users: []
};

const app = combineReducers({
    comments,
    users
});




