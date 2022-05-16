import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {connectRouter,routerMiddleware} from 'connected-react-router'
import { UsersReducer } from '../users/reducers';

function createStore(history){
    return reduxCreateStore(
        combineReducers({
            users:UsersReducer,
            router:connectRouter(history)
        }),
        applyMiddleware(
            routerMiddleware(history) 
        )
    )
}

export default createStore;