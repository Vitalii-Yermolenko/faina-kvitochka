import { GET_MAIN_PAGE_REQUEST,GET_TOP_COLLECTIONS_SUCCSES,GET_TOP_JEWELRIES_SUCCSES,GET_NEW_PRODUCTS_SUCCSES,GET_MAIN_PAGE_ERROR } from "../actions"

export function mainPageReducer(state = {topCollections:[],topJewelries:[],newProducts:[], isLoadingTopCollections:false,isLoadingTopJewelries:false,isLoadingNewProductss:false}, action){
    switch (action.type){
        case GET_MAIN_PAGE_REQUEST:
            return {...state, isLoadingTopCollections:true, isLoadingTopJewelries:true, isLoadingNewProductss:true}
        case GET_TOP_COLLECTIONS_SUCCSES:
            return {...state, topCollections:action.payload.topCollections, isLoadingTopCollections:false}
        case GET_TOP_JEWELRIES_SUCCSES:
            return {...state, topJewelries:action.payload.topJewelries, isLoadingTopJewelries:false}
            case GET_NEW_PRODUCTS_SUCCSES:
        return {...state, newProducts:action.payload.newProducts, isLoadingNewProductss:false}            
        case GET_MAIN_PAGE_ERROR:
            return {...state, isLoadingTopCollections:false,isLoadingTopJewelries:false,isLoadingNewProductss:false}
        default:
            return state
    }
}