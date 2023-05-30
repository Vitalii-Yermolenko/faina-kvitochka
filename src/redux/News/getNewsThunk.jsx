import { GET_NEWS_REQUEST,GET_NEWS_SUCCSES,GET_NEWS_ERROR } from "../actions"


export function getNewsThunk(){
    return function(dispatch) {
      dispatch({type:GET_NEWS_REQUEST})
        fetch("./news.json", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => dispatch({type:GET_NEWS_SUCCSES, payload:{news: data}}))
          .catch(error => {
            dispatch({type:GET_NEWS_ERROR})
            console.error(error)
          });
    }
}