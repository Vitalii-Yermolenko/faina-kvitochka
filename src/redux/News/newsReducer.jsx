import { GET_NEWS_REQUEST,GET_NEWS_SUCCSES,GET_NEWS_ERROR } from "../actions"

export function NewsReducer(state = {news:[],isLoadingNews:false}, action){
    switch (action.type){
        case GET_NEWS_REQUEST:
            return {...state, isLoadingNews:true}
        case GET_NEWS_SUCCSES:
            return {...state, news:action.payload.news, isLoadingNews:false}          
        case GET_NEWS_ERROR:
            return {...state, isLoadingNews:false}
        default:
            return state
    }
}