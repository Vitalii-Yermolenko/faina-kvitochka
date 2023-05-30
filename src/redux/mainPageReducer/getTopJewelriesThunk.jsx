import { GET_MAIN_PAGE_REQUEST,GET_TOP_JEWELRIES_SUCCSES,GET_MAIN_PAGE_ERROR } from "../actions"


export function getTopJewelriesThunk(){
    return function(dispatch) {
      dispatch({type:GET_MAIN_PAGE_REQUEST})
        fetch("./topJewelries.json", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => dispatch({type:GET_TOP_JEWELRIES_SUCCSES, payload:{topJewelries: data}}))
          .catch(error => {
            dispatch({type:GET_MAIN_PAGE_ERROR})
            console.error(error)
          });
    }
}